import axios from "axios";

export function callApi({ method = "get", url, params, data }) {
  return axios({
    url,
    method,
    baseURL: "http://localhost:8081",
    params,
    data,
  });
}
