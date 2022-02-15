import axios from 'axios';
import { API_DOMAIN,  } from '../../Config'


export const fetchAPI = (url, headers = {}, data, method = 'POST',) => {
  let config = {
    method,
    url: `${API_DOMAIN}/${url}`,
    headers: headers,
    data: data,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => resolve(response.data))
      .catch(error => {
        // console.log(error.response.data);
        reject(error.response.data)
      })
  })
}