import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL || "https://back-faltou.up.railway.app/";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
