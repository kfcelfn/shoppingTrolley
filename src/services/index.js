import api from './api';
import { get } from '@/utils/request';

// export const login = option => post(api.login, option)

//产品分类页左侧菜单
export const classifyListData = option => get(api.classifyListData)
export const shopsData = option => get(`http://vueshop.glbuys.com/api/home/category/show?cid=${option}&token=1ec949a15fb709370f`)

//详情页的商品数据
export const detailsData = option => get(`http://vueshop.glbuys.com/api/home/goods/info?gid=${option}&type=details&token=1ec949a15fb709370f`)
//详情页的评论数据
export const derailsComment = option => get(`http://vueshop.glbuys.com/api/home/reviews/index?gid=${option}&token=1ec949a15fb709370f&page=1`)
//评论页的评论数据
export const derailsComment1 = derailsComment
//评论页的详情数据
export const detailsData1 = detailsData
//详情页点击加入购物车
export const addToCar = option => get(`http://vueshop.glbuys.com/api/home/goods/info?gid=${option}&type=spec&token=1ec949a15fb709370f`)
