import axios from "axios";
import { FAKE_API } from "../constants";
// import { TRACTIAN_BASE_URL } from "../constants";
export const API = axios.create({
    baseURL: FAKE_API,
});
