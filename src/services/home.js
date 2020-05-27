import api from './api';
import { get } from '@/utils/request';

export const banners = () => get(api.banner)
export const navApi = () => get(api.navApi)
export const homeGoods = () => get(api.homeGoods)
export const homeList = () => get(api.homeList)