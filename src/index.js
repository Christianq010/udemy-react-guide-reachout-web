import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios global Interceptors for sending and accepting Data from an API / server etc for everything
// saved as variables
const request = axios.interceptors.request.use(request => {
                    console.log(request);
                    // edit request config and recieve it
                    return request;
                }, error => {
                    console.log(error);
                    return Promise.reject(error);
                });
const response = axios.interceptors.response.use(response => {
                    console.log(response);
                    return response;
                }, error => {
                    console.log(error);
                    return Promise.reject(error);
                });
// Called eject to stop them from working
axios.interceptors.request.eject(request, response);


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
