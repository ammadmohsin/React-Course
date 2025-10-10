import axios, { AxiosError, CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {  // passed with every http request (a api key needed with a http request which we store that in this section)
  //     'api-key' : '...someValue'
  // }
});

export { CanceledError };
export { AxiosError };
