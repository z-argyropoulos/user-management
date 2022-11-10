const usersReducers = {
  startFetching: (state) => {
    state.loading = true;
  },
  fetchSuccessful: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  fetchFailed: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updateUser: (state, action) => {
    const { id, data } = action.payload;

    const userIndex = state.users.findIndex((user) => user.id === id);

    // overwrite the updated/returned fields while
    // keeping other fields state intact
    const delta = { ...state.users[userIndex], ...data };

    // we do not mutate the users array as
    // redux toolkit uses immer.js internally.
    // check that this user exists in users array
    // and update only the provided properties
    if (userIndex !== -1) {
      state.users.splice(userIndex, 1, delta);
    }
  },
};

export default usersReducers;
