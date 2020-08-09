import axios from "axios";

export function callApi({ method = "get", url, params, data }) {
  return axios({
    url,
    method,
    baseURL: "https://jsonplaceholder.typicode.com",
    params,
    data,
  });
}
