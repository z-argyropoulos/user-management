import { useEffect, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import userFormInitialState from '@models/forms/userForm';
import TextfieldWithLabel from '@components/shared/TextfieldWithLabel';
import { useParams } from 'react-router-dom';
import { selectUserById } from '@redux/selectors/users';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserData } from '@redux/actions/users';
import ActionButtonsContainer from '@containers/forms/ActionButtonsContainer';

const FormContainer = styled(Box)({
  width: '100%',
});

const FormField = styled(TextfieldWithLabel)(({ theme }) => ({
  marginBlockEnd: theme.spacing(2),
}));

const mapUserDataToFormFields = (userData) => {
  // Here we map each field that exists in the form
  // with the (fetched) user details that we have in store.
  // We only update the value field of these fields and
  // keep all other properties as is from the initial object
  let userInfo = {};
  for (const formField in userFormInitialState) {
    userInfo = {
      ...userInfo,
      [formField]: {
        ...userFormInitialState[formField],
        value: userData?.[formField],
      },
    };
  }
  return userInfo;
};

// Get value property for each form field
// First map fields in tuple format: [fieldKey, fieldValue]
// and then create object from array
const extractUserDataFromForm = (userFormData) =>
  Object.fromEntries(
    Object.keys(userFormData).map((fieldKey) => [
      [fieldKey],
      userFormData[fieldKey].value,
    ])
  );

const UserInfoForm = () => {
  const [userForm, setUserForm] = useState(userFormInitialState);
  const dispatch = useDispatch();
  const { id: userId } = useParams();
  const user = useSelector(selectUserById(userId));

  const setInitialUserForm = () => {
    const userInfo = mapUserDataToFormFields(user);
    setUserForm(userInfo);
  };

  useEffect(() => {
    // when user exists in users state update
    // form fields (state) with this user's info
    if (user) {
      setInitialUserForm();
    }
  }, [user]);

  const handleFieldChange = (field) => (e) => {
    const value = e.target.value;

    setUserForm((prevForm) => {
      // changed field property
      const delta = {
        [field]: {
          ...prevForm[field],
          value,
        },
      };

      return { ...prevForm, ...delta };
    });
  };

  const handleClearFields = () => setInitialUserForm();

  const handleSubmitForm = () => {
    const userData = extractUserDataFromForm(userForm);
    dispatch(updateUserData(userId, userData));
  };

  return (
    <FormContainer>
      {Object.entries(userForm).map(([fieldKey, fieldValue]) => (
        <FormField
          key={fieldKey}
          label={fieldValue?.label}
          value={fieldValue.value}
          onChange={handleFieldChange(fieldKey)}
        />
      ))}
      <ActionButtonsContainer>
        <Button color="secondary" onClick={handleClearFields}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmitForm}>
          Save
        </Button>
      </ActionButtonsContainer>
    </FormContainer>
  );
};

export default UserInfoForm;
