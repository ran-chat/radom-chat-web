import { MATCH_USER } from './model';
import { API } from '@/service/authService';
import { rest } from '@/service/rest';

export const getMatchList = async (id: number): Promise<MATCH_USER[]> => {
  return await API.get(`${rest.get.matchedlist}/${id}`).then((res) => res.data);
};
