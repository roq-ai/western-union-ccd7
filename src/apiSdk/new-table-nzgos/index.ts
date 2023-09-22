import axios from 'axios';
import queryString from 'query-string';
import { NewTableNzgoInterface, NewTableNzgoGetQueryInterface } from 'interfaces/new-table-nzgo';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNewTableNzgos = async (
  query?: NewTableNzgoGetQueryInterface,
): Promise<PaginatedInterface<NewTableNzgoInterface>> => {
  const response = await axios.get('/api/new-table-nzgos', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNewTableNzgo = async (newTableNzgo: NewTableNzgoInterface) => {
  const response = await axios.post('/api/new-table-nzgos', newTableNzgo);
  return response.data;
};

export const updateNewTableNzgoById = async (id: string, newTableNzgo: NewTableNzgoInterface) => {
  const response = await axios.put(`/api/new-table-nzgos/${id}`, newTableNzgo);
  return response.data;
};

export const getNewTableNzgoById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/new-table-nzgos/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNewTableNzgoById = async (id: string) => {
  const response = await axios.delete(`/api/new-table-nzgos/${id}`);
  return response.data;
};
