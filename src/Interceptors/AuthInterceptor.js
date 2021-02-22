import axios from 'axios'
import { API_BASE_URL } from 'configs/AppConfig'
import { AUTH_TOKEN } from 'context/constants/Auth'
import { notification } from 'antd';

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000
})

// Config
const ENTRY_ROUTE = 'login'
const TOKEN_PAYLOAD_KEY = 'authorization'
const PUBLIC_REQUEST_KEY = 'public-request'

// API Request interceptor
service.interceptors.request.use(config => {
	const jwtToken = null  
	
  if (jwtToken) {
    config.headers[TOKEN_PAYLOAD_KEY] = jwtToken
  }

  if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
		window.location.reload();
  }

  return config
}, error => {
	// Do something with request error here
	notification.error({
		message: 'Error'
	})
  Promise.reject(error)
})

// API respone interceptor
service.interceptors.response.use( (response) => {
  //response.data.data.status = response.data.status;
	return response
}, (error) => {

	let notificationParam = {
		message: ''
	}
	
	// Remove token and redirect 
	if (error.response.status === 400 || error.response.status === 403) {
		notificationParam.message = 'Authentication Fail'
		notificationParam.description = 'Please login again'
		window.location.reload();
	}

	if (error.response.status === 404) {
		notificationParam.message = 'Not Found'
	}

	if (error.response.status === 500) {
		notificationParam.message = 'Internal Server Error'
	}
	
	if (error.response.status === 508) {
		notificationParam.message = 'Time Out'
	}

	notification.error(notificationParam)

	return Promise.reject(error);
});

export default () => service