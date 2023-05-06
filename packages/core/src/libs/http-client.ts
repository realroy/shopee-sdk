import Axios from "axios";

import type { AxiosInstance } from "axios";

export class HttpClient {
  private static instance: HttpClient;
  private readonly axios: AxiosInstance;
  private readonly logger = console;

  private constructor() {
    this.axios = Axios.create();
    this.axios.interceptors.request.use(
      (value) => {
        this.logger.log(`${value.url}`);
        if (value.data) {
          this.logger.info(`[Body]: ${JSON.stringify(value.data, null, 4)}`);
        }

        return value;
      },
      (error) => {
        this.logger.error(error);
        return error;
      }
    );

    this.axios.interceptors.response.use(
      (value) => {
        this.logger.log(`[Response]: ${JSON.stringify(value.data, null, 4)}`);
        return value;
      },
      (error) => {
        const {
          response,
          message,
          config: { method, url, data, params },
        } = error;
        const status = response?.status;
        this.logger.error({ status, message, method, url, data, params });
        return error;
      }
    );
  }

  static getInstance() {
    return this.instance ?? (this.instance = new HttpClient());
  }

  get(url: string, params?: object) {
    return this.axios.get(url, { params });
  }

  post(url: string, params?: object, body?: object) {
    return this.axios.post(url, body, { params });
  }
}
