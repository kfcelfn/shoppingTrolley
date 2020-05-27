import api from './api';
import { get, post } from '@/utils/request';

export const registerInto = (payload) => post(api.registerInto, payload)