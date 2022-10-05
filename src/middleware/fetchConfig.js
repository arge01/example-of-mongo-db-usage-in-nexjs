import axios from 'axios';

const rest_url = `${process.env.NEXT_PUBLIC_HOST_NAME}`;

const fetchConfig = (method, url, data) => {
  const config = {
    method,
    url: `${rest_url}/${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data && JSON.stringify(data),
  };
  return axios(config);
};

export default fetchConfig;
