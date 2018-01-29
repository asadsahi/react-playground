import axios from 'axios';

// https://github.com/axios/axios

let instance = axios.create({
  baseURL: process.env.HOST
});

// Alter defaults after instance has been created

let token = localStorage.getItem('auth_token');
if (token) {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

const get = url => instance.get(url);
const post = (url, data) => instance.post(url, data);
const put = (url, data) => instance.put(url, data);
const del = url => instance.delete(url);

const dataService = {
  get,
  post,
  put,
  delete: del
};

export { dataService };
