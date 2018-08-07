import axios from 'axios';
// import store from 'store';

axios.defaults.baseURL = '/api';

// axios.interceptors.request.use(config => {
//   config.headers['Api-Token'] = store.get('Api-Token', '');
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

export default axios;
