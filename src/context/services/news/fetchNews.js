import axiosInstance from "Interceptors/UnauthInterceptor";
import { CONNECTION_ERROR } from "constants/connection_err";
import {
    NEWS_LOADING,
    NEWS_LOAD_SUCCESS,
    NEWS_LOAD_ERROR
} from "../../constants/News";
export const fetchNews = () => (dispatch) => {
  axiosInstance()
    .get("")
    .then((res) => {

      let {status, message, totalResults, articles} = res.data;

      if(status){
        dispatch({
          type: NEWS_LOAD_SUCCESS,
          payload: articles,
        });
      }else{
        dispatch({
          type: NEWS_LOAD_ERROR,
          payload: message ? message : "COULD NOT CONNECT",
        });
      }
      

    })
    .catch((err) => {
      dispatch({
        type: NEWS_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
