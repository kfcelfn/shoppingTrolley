import api from './api';
import { get, post } from '@/utils/request';

export const findHotData = () => get(api.findHotData)

//搜索宝贝名称
const url = 'http://vueshop.glbuys.com'
export const findSearchData = (values) => get(`${url}/api/home/goods/search?kwords=${values}&token=1ec949a15fb709370f`)
