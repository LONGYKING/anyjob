import axios from "axios";

export default (navigation = null) => {
  const baseURL = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=c8625c6adc694eeda9cd53bebe7cd3e9';//process.env.REACT_APP_BACKEND_URL
  let headers = {};

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {

        window.location = "/login";

      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
