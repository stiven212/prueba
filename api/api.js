import axios from "axios";

const api = axios.create({
  // eslint-disable-next-line
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default api;
