import axios from "axios";

const API_URL = "http://localhost:3000";

export const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
});

export const registerUser = async (userData) => {
    return api.post("/auth/register", userData);
};

export const loginUser = async (credentials) => {
    return api.post("/auth/login", credentials);
};

export const fetchUser = async (token) => {
    return api.get("/user/:id", {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export default api;
