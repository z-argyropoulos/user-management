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
};

export default usersReducers;
