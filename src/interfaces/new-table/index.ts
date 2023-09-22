import { GetQueryInterface } from 'interfaces';

export interface NewTableInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface NewTableGetQueryInterface extends GetQueryInterface {
  id?: string;
}
