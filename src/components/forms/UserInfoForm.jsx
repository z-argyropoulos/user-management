import { useEffect, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import userFormInitialState from '@models/forms/userForm';
import TextfieldWithLabel from '@components/shared/TextfieldWithLabel';
import { useParams } from 'react-router-dom';
import { selectUserById } from '@redux/selectors/users';
import { useSelector, useDispatch } from 'react-redux';
import { updateSingleUser } from '@services/users';
import { updateUser } from '@redux/actions/users';
import ActionButtonsContainer from '@containers/forms/ActionButtonsContainer';
import _ from 'lodash';

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
  const { id: userId } = useParams();
  const user = useSelector(selectUserById(userId));

  const dispatch = useDispatch();

  const [form, setForm] = useState(userFormInitialState);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // when user exists in users state update
    // form fields (state) with this user's info
    if (user) {
      setInitialUserForm();
    }
  }, [user]);

  useEffect(() => {
    // check if there are unsaved changes
    setIsEditMode(!_.isEqual(form, mapUserDataToFormFields(user)));
  }, [form]);

  const setInitialUserForm = () => {
    const userInfo = mapUserDataToFormFields(user);
    setForm(userInfo);
  };

  const handleFieldChange = (field) => (e) => {
    const value = e.target.value;

    setForm((prev) => {
      // changed field property
      const delta = {
        [field]: {
          ...prev[field],
          value,
        },
      };

      return { ...prev, ...delta };
    });
  };

  const handleClearFields = () => setInitialUserForm();

  const handleSubmitForm = async () => {
    const userData = extractUserDataFromForm(form);
    setIsLoading(true);
    try {
      // PUT HTTP request to update user in DB
      const { data } = await updateSingleUser(userId, userData);
      setIsLoading(false);
      // update user in users list state
      // so that we do not have to make another
      // GET request to update all users list
      dispatch(updateUser({ id: userId, data }));
    } catch (error) {
      // update form error
      setError(error?.response?.data?.message || 'Network error');
    }
  };

  return (
    <FormContainer>
      {Object.entries(form).map(([fieldKey, fieldValue]) => (
        <FormField
          key={fieldKey}
          label={fieldValue.label}
          value={fieldValue.value}
          onChange={handleFieldChange(fieldKey)}
        />
      ))}
      <ActionButtonsContainer>
        {!isLoading && isEditMode && (
          <Button color="secondary" onClick={handleClearFields}>
            Cancel
          </Button>
        )}
        <Button
          variant="contained"
          disabled={isLoading || !isEditMode}
          onClick={handleSubmitForm}>
          Save
        </Button>
      </ActionButtonsContainer>
    </FormContainer>
  );
};

export default UserInfoForm;
