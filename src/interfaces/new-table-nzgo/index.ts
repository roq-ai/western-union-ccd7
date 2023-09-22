import { GetQueryInterface } from 'interfaces';

export interface NewTableNzgoInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface NewTableNzgoGetQueryInterface extends GetQueryInterface {
  id?: string;
}
