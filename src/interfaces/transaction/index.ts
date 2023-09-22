import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
