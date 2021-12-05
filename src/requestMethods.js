import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const BASE_URL = "https://aung-shop.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzYwZTYzZDc1MzM2NjNmZmNmNzRlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTc1NDc0OCwiZXhwIjoxNjM2MDEzOTQ4fQ.LtMzlagrwr8lX1hUCvL2g2wFRVQzrPFGigVaVH2ezWA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
