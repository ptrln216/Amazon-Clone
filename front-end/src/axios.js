import axios from "axios";

const instance = axios.create({
    // THE API URL
    baseURL: "/api",
});

export default instance;
