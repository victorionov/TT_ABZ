import axios from "axios";
import { User } from "../@types/User";

export const fetchUsers = async(page: number) => {
  const response = await axios.get< {users: User[]} >(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);

  return response.data.users;
};

export const createUser = async (user: User) => {
  const token = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');

  console.log(token.data.token);


  const formData = new FormData();
  formData.append('position_id', String(user.position_id));
  formData.append('name', user.name);
  formData.append('email', user.email);
  formData.append('phone', user.phone);
  formData.append('photo', user.photo);

  const response = await axios.post<{ user: User }>('https://frontend-test-assignment-api.abz.agency/api/v1/users', formData, {
    headers: {
      'Token': token.data.token,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.user;
};
