import { sliceName } from '@redux/slices/users';

const selectUsersState = (state) => state[sliceName];
const selectUsers = (state) => state[sliceName].users;

export { selectUsersState, selectUsers };
