import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTc0NTEzYjg1N2ZjZWUyYzlhNzVhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDIzMTMxMiwiZXhwIjoxNjQwNDkwNTEyfQ.ADpmSBqqfWdOjy_xWGDqXnA3k3xUl0FMeAwwefm0OZg";
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Beare ${TOKEN}`},
});
