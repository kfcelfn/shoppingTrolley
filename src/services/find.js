import api from './api';
import { get, post } from '@/utils/request';
//搜索宝贝名称

export const findHotData = () => get(api.findHotData)
export const findSearchData = (values) => post(`http://localhost/api/home/goods/param?kwords=${values}&token=1ec949a15fb709370f`)
