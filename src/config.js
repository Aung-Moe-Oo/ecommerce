import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://aung-shop.herokuapp.com/",
});
