import { SIGN_IN_MODEL_TYPE, SIGN_IN_RESPONSE_TYPE, SIGN_UP_MODEL_TYPE, SIGN_UP_RESOPNSE_TYPE } from './model';
import { API } from '@/service/authService';
import { rest } from '@/service/rest';

export const signUp = async (params: SIGN_UP_MODEL_TYPE): Promise<SIGN_UP_RESOPNSE_TYPE> => {
  return await API.post(rest.post.signUp, params).then((res) => res.data.result);
};

export const signIn = async (params: SIGN_IN_MODEL_TYPE): Promise<SIGN_IN_RESPONSE_TYPE> => {
  return await API.post(rest.post.signIn, params).then((res) => res.data.result);
};
