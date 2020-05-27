import api from './api';
import { get, post } from '@/utils/request';

export const loginInto = (payload) => post(api.loginInto, payload)