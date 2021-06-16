import axios, { AxiosResponse } from 'axios';

import config from 'src/utils/config';
import { log } from 'src/utils/logger';

export interface IRes<T> {
  status: number;
  data: T;
  error: boolean | string;
}

axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common.Authorization = `Bearer ${config.token}`;

const checkResponse = async <T,>(response: Promise<{ response: AxiosResponse }>): Promise<IRes<T>> =>
  response
    .then(res => res.response || res)
    .then(res => {
      log('Serv result', res);
      const { status } = res;
      const { data = {}, errors } = res.data;

      if (errors) {
        return { status: 500, data, error: errors };
      }

      return { status, data: res.data, error: status !== 200 };
    })
    .catch(err => {
      log('err', err);
      return { status: 500, data: err, error: true };
    });

export const get = async <T,>(endPoint: string, params: any): Promise<IRes<T>> =>
  checkResponse<T>(axios.get(endPoint, { params }).catch(e => e));
