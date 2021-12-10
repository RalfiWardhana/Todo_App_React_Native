// import axios here ...
import axios from "axios";

// Create base URL API
export const API = axios.create({
  baseURL: "https://todolist-789.herokuapp.com/app/v1"
});