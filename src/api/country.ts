import { AxiosResponse } from 'axios';

import client from 'services/client';
import { CountryApi } from './base';

export class CountryApis extends CountryApi {
  async getCountries() {
    const res: AxiosResponse = await client.get('/countries');
    return res.data;
  }
}
