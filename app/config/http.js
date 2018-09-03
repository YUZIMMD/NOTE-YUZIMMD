import { Message } from "element-ui";
import req from "@/config/api";

axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;
let cont = "application/json; charset=utf-8";

export const iHttp = (type, url, data = {}, headersV = cont) => {
  return new Promise((resolve, reject) => {
    let init = {
      method: type,
      url: url,
      headers: {
        "Content-Type": headersV
      }
    };
    if (!/^(http|https):\/\/+/g.test(url)) { init.baseURL = req }

    type === "get" ? (init["params"] = data) : (init["data"] = data);

    axios(init)
      .then(
        res => {
          if (!res.data.code || res.data.code === 200) resolve(res.data);
          else Message.error(res.data.msg);
        },
        err => {
          reject(err);
        }
      )
      .catch(err => {
        reject(err);
      });
  });
};
