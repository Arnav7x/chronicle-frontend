import axios from "axios";

const api = axios.create({
  baseURL: "https://chronicle-backend-tau.vercel.app/", // backend URL
  withCredentials: true,            // send cookies
});

export default api;
