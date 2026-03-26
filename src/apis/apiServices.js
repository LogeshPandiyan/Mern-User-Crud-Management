import axios from "axios";

const API_BASE_URL = axios.create({
  baseURL: "http://localhost:5000/api/v1/users", // backend url for frontend
  headers: {
    "Content-Type": "application/json",
  },
});



//  Backend EndPoint Connections

// Create user
export const createUser = async (data) =>{
  try{
    const response = await API_BASE_URL.post(`/create-user`,data);
    return response;
  }
  catch(error){
    console.error('Error Creating User', error);
    throw error;
  }
}

// Get all users lists
export const getAllUsers = async () => {
  try{
    const response = await API_BASE_URL.get(`/get-users`);
    // console.log('All Users lists :' , response)
    return response;
  }
  catch(error){
    console.log("Error fetching data");
    throw error;
  }
} 

// Get single user

export const getSingleUser = async (id) => {
  try{
    const response = await API_BASE_URL.get(`/get-users/${id}`);
    return response;
  }
  catch(error){
    console.error('Error fetching single users');
    throw error;
  }
}

// Update user

export const updateUser = async (id,data) => {
  try{
    const response = await API_BASE_URL.put(`/update-user/${id}`,data);
    return response;
  }
  catch(error) {
    console.log('Error Updating user')
    throw error;
  }
} 

// Delete user
export const deleteUser = async (id) => {
  try{
    const response = await API_BASE_URL.delete(`/delete-user/${id}`);
    return response;
  }
  catch(error){
    console.error('Error deleting  user');
    throw error;
  }
}


