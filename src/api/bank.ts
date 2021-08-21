import { AxiosResponse } from 'axios';

import client from 'services/client';
import { BankApi } from './base';

export class BankApis extends BankApi {
  async getInfoBankById(id: number) {
    const res: AxiosResponse = await client.get(`/banks/${id}`);
    return res.data;
  }
}
