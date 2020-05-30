import api from './api';
import { get, post } from '@/utils/request';

export const registerInto = (payload) => post(api.registerInto, payload) //注册
export const registerVcode = (payload) => post(api.registerVcode, payload) //获取验证码