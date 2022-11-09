import { usersSlice } from '@redux/slices/users';
import { getAllUsers, updateSingleUser } from '@services/users';

// async thunk reducer
const fetchAllUsers = () => async (dispatch) => {
  dispatch(startFetching());
  try {
    const { data: users } = await getAllUsers();
    dispatch(fetchSuccessful(users));
  } catch (error) {
    console.error(error);
    // set error message from response payload if it exists
    // otherwise set a general error message to display
    dispatch(
      fetchFailed(error?.response?.data?.message || 'Network error')
    );
  }
};

const updateUserData = (userId, userData) => async (dispatch) => {
  try {
    // put HTTP request to update user in DB
    const { data } = await updateSingleUser(userId, userData);
    // update user in state so that we do not have stale data
    // or have to fetch all users/user again to get updated data
    dispatch(updateUser({ id: userId, data }));
  } catch (error) {
    console.error(error);
    dispatch(
      fetchFailed(error?.response?.data?.message || 'Network error')
    );
  }
};

export { fetchAllUsers, updateUserData };
export const {
  startFetching,
  fetchFailed,
  fetchSuccessful,
  updateUser,
} = usersSlice.actions;
