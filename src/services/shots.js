import axios from 'axios';

import ACCESS_TOKEN from '../config/dribbleAccessToken';

export default function getShots() {
  return axios.get('https://api.dribbble.com/v1/shots', {
    params: {
      access_token: ACCESS_TOKEN,
    },
  });
}
