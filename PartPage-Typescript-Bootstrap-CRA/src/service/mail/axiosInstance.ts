import axios from "axios";
import { apiEndpoint } from "service/apiEndpoint";

export const axiosInstance = axios.create({
  baseURL: apiEndpoint.airtable,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getResponseAxiosInstance = axios.create({
  baseURL: apiEndpoint.getresponse,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
