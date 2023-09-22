import axios from 'axios';
import queryString from 'query-string';
import { NewTableYxzmInterface, NewTableYxzmGetQueryInterface } from 'interfaces/new-table-yxzm';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNewTableYxzms = async (
  query?: NewTableYxzmGetQueryInterface,
): Promise<PaginatedInterface<NewTableYxzmInterface>> => {
  const response = await axios.get('/api/new-table-yxzms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNewTableYxzm = async (newTableYxzm: NewTableYxzmInterface) => {
  const response = await axios.post('/api/new-table-yxzms', newTableYxzm);
  return response.data;
};

export const updateNewTableYxzmById = async (id: string, newTableYxzm: NewTableYxzmInterface) => {
  const response = await axios.put(`/api/new-table-yxzms/${id}`, newTableYxzm);
  return response.data;
};

export const getNewTableYxzmById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/new-table-yxzms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNewTableYxzmById = async (id: string) => {
  const response = await axios.delete(`/api/new-table-yxzms/${id}`);
  return response.data;
};
