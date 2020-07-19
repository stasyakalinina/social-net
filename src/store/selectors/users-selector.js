export const getUsers = (state) => {
  return state.usersPage.users;
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}

export const getLoading = (state) => {
  return state.usersPage.loading;
}

export const getSendingRequest = (state) => {
  return state.usersPage.sendingRequest;
}