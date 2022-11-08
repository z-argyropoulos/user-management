import { configureStore } from '@reduxjs/toolkit';
// reducers
import usersReducer from '@redux/slices/users';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export { store };
