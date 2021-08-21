import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_URL_API ||
    'https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge',
  timeout: 1000,
});

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export interface ClientTypes {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

const client: ClientTypes = {
  get: (url, config) => axiosInstance.get(url, config),
};

export default client;
