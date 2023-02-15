import axios from "axios";
import { TRACTIAN_BASE_URL } from "../constants";

export const API = axios.create({
    baseURL: TRACTIAN_BASE_URL,
});
