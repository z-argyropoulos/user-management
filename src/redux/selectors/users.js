import { sliceName } from '@redux/slices/users';
import { createSelector } from '@reduxjs/toolkit';

const selectUsersState = (state) => state[sliceName];
const selectUsers = (state) => state[sliceName].users;
const selectUserById = (id) =>
  createSelector(selectUsers, (users) =>
    users.find((user) => user?.id === id)
  );

export { selectUsersState, selectUsers, selectUserById };
