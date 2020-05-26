import api from './api';
import { get, post } from '@/utils/request';

export const findHotData = () => get(api.findHotData)