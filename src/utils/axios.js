import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://professor-allocation.herokuapp.com',
});

export default myAxios;
