import api from './api';
import { get, post } from '@/utils/request';

// export const login = option => post(api.login, option)

//产品分类页左侧菜单
export const goodsLeftList = option => get(api.goodsLeftList)
export const goodsRightShop = option => get(`http://vueshop.glbuys.com/api/home/category/show?cid=${option}&token=1ec949a15fb709370f`)