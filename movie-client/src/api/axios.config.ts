
import axios, { AxiosError, AxiosResponse } from 'axios';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = "https://movie-react-spring-boot.onrender.com";

const setupAxiosInterceptors = () => {

  const onResponseSuccess = (response: AxiosResponse) => response;
  const onResponseError = async (err: AxiosError) => {
    return Promise.reject(err);
  };

  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
