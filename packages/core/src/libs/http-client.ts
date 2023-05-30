import Axios from "axios";

import type { AxiosInstance } from "axios";

export class HttpClient {
  private static instance: HttpClient;
  private readonly axios: AxiosInstance;
  private readonly logger = console;

  private isLogEnabled: boolean;
  private logInterceptorIds: number[] = []

  private constructor() {
    this.isLogEnabled = false;
    this.axios = Axios.create();
    if (this.isLogEnabled) {
      this.addLogInterceptor();
    }
  }

  private addLogInterceptor() {
    const requestLogInterceptorId = this.axios.interceptors.request.use(
      (value) => {
        this.logger.log(`${value.url}`);
        if (value.data) {
          this.logger.info(`[Body]: ${JSON.stringify(value.data, null, 4)}`);
        }

        return value;
      },
      (error) => {
        this.logger.error(error);

        throw error;
      }
    );

    const responseLogInterceptorId = this.axios.interceptors.response.use(
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
        throw error;
      }
    );

    this.logInterceptorIds = [requestLogInterceptorId, responseLogInterceptorId]
  }

  private removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject)
  }

  static getInstance() {
    return this.instance ?? (this.instance = new HttpClient());
  }

  setLogEnabled(newValue: boolean) {
    this.isLogEnabled = newValue;
    if (this.isLogEnabled) {
      this.addLogInterceptor()
    } else {
    this.removeLogInterceptor()
    }

    return this.isLogEnabled;
  }

  get(url: string, params?: object) {
    return this.axios.get(url, { params });
  }

  post(url: string, params?: object, body?: object) {
    return this.axios.post(url, body, { params });
  }
}
