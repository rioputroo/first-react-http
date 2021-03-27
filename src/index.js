import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
