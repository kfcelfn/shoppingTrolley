import api from './api';
import { get, post } from '@/utils/request';

export const myEnshrine = () => get(api.myEnshrine)