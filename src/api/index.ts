import axios from "axios";

const BASE_URL = "http://localhost:8080";

export function apiInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
}

export function tokenInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return instance;
}