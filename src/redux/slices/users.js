import { createSlice } from '@reduxjs/toolkit';
import usersReducers from '@redux/reducers/users';

const initialState = {
  users: [],
  loading: false,
  error: '',
};

const sliceName = 'users';

const usersSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: usersReducers,
});

export default usersSlice.reducer;
export { usersSlice, sliceName };
