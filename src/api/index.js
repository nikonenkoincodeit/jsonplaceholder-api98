import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/";

axios.defaults.baseURL = BASE_URL;

async function getData(path) {
  const response = await axios.get(path);
  return response.data;
}

export { getData };
