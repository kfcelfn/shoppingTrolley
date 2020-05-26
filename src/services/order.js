import api from './api';
import { get, post } from '@/utils/request';

export const orderAll = () => get(api.orderAll)
export const orderStayEvaluate = () => get(api.orderStayEvaluate)