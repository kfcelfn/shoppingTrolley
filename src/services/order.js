import api from './api';
import { get, post } from '@/utils/request';

export const orderAll = () => get(api.orderAll)