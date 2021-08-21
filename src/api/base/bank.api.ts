import { IBank } from 'interfaces/bank';

export abstract class BankApi {
  abstract getInfoBankById(id: number): Promise<{ data: IBank }>;
}
