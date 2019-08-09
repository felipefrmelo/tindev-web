import axios from "axios";
const baseURL = "http://ec2-3-88-217-34.compute-1.amazonaws.com:3333";

const api = axios.create({
  baseURL
});

export default api;
