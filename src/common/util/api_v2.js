import axios from "axios";
import { API_HOST } from "../constant";

export function callApi({ method = "get", url, params, data }) {
  return axios({
    url,
    method,
    baseURL: API_HOST,
    params,
    data,
    withCredentials: true,
  }).then((response) => {
    const { resultCode, resultMessage } = response.data;
    if (resultCode < 0) {
      console.log("추후 Alert Compo 넣으세요.");
    }
    return {
      isSuccess: resultCode === ResultCode.Success,
      data: response.data.data,
      resultCode,
      resultMessage,
    };
  });
}

export const ResultCode = {
  Success: 0,
};
