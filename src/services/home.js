import api from './api';
import { get , post } from '@/utils/request';

export const banner = () => get(api.banner)
export const navApi = () => get(api.navApi)
export const homeGoods = () => get(api.homeGoods)
export const homeList = () => get(api.homeList)