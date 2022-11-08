import axios from 'axios';

const { VITE_APP_EPIGNOSIS_USERS_API: epignosisUsersAPI } =
  import.meta.env;

const usersAxiosInstance = axios.create({
  baseURL: `${epignosisUsersAPI}/users`,
});

const getAllUsers = () => {
  return usersAxiosInstance.get('/');
};

const getSingleUser = (userId) => {
  return usersAxiosInstance.get('/', { params: { id: userId } });
};

const updateSingleUser = (userId, userData) => {
  return usersAxiosInstance.put(`/${userId}`, { ...userData });
};

export { getAllUsers, getSingleUser, updateSingleUser };
