import axios from "axios";
const baseURL = "http://ec2-3-89-20-210.compute-1.amazonaws.com:3333";

const api = axios.create({
  baseURL
});

export default api;
