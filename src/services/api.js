import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '9d7d7d64-1132-45ee-bf9c-582e2912942d'
  }
});

const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  }
};

const followAPI = {
  followUser(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data);
  }
};

const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  }
};

const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(newStatus) {
    return instance.put(`profile/status`, { status: newStatus})
  },
};

export {
  usersAPI,
  followAPI,
  authAPI,
  profileAPI
};