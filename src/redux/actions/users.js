import { usersSlice } from '@redux/slices/users';
import { getAllUsers } from '@services/users';

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

export { fetchAllUsers };
export const {
  startFetching,
  fetchFailed,
  fetchSuccessful,
  updateUser,
} = usersSlice.actions;
