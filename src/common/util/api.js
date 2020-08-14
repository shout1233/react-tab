import axios from "axios";

export default function callApi({ method = "get", url, params, data }) {
  return axios({
    url,
    method,
    baseURL: "http://localhost:8088",
    params,
    data,
  });
}
