import API from "../apis/axiosInstance";

// Create api
export const createUser = (data) => API.post('/createUser',data);

// Get all users lists
export const getAllUsers = () => API.get('/getAllUsers');

// Get single user 
export const getSingleUser = (id) => API.get(`/getAllUser/${id}`)

// Update user 
export const updateUser = (id, data) => API.put(`/updateUser/${id}`,data);

// Delete user
export const deleteUser = (id) => API.delete(`/deleteUser${id}`) 