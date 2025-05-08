import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class HyRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({ baseURL, timeout });

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new HyRequest(BASE_URL, TIME_OUT);
