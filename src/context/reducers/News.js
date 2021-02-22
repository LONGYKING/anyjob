import {
    NEWS_LOADING,
    NEWS_LOAD_SUCCESS,
    NEWS_LOAD_ERROR
} from "../constants/News";
  
  const news = (state, { payload, type }) => {
    
    switch (type) {
      case NEWS_LOADING: {
        return {
          ...state,
          feeds: {
            ...state.feeds,
            loading: !state.feeds.loading
          },
        };
      }
  
      case NEWS_LOAD_SUCCESS: {
        return {
          ...state,
          feeds: {
            ...state.feeds,
            loading: false,
            data: payload,
          },
        };
      }
      case NEWS_LOAD_ERROR: {
        return {
          ...state,
          feeds: {
            ...state.feeds,
            loading: false,
            error: payload
          },
        };
      }
      default:
        return state;
    }
  };
  
  export default news;
  