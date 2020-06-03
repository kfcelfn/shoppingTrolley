import React, { useState } from 'react'
import { Drawer } from 'antd'
import axios from "axios"
import ShadeType from "./shadeCom/shadeType"
import ShadePrice from "./shadeCom/shadePrice"
import ShadeBrand from "./shadeCom/shadeBrand"
import ShadeSelective from "./shadeCom/shadeSelective"
import './shade.less'

export const Shade = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    axios.get('http://vueshop.glbuys.com/api/home/goods/search?kwords=%E8%BF%9E%E8%A1%A3%E8%A3%99&param=[949,956]&page=1&price1=100&price2=200&otype=all&cid=492&token=1ec949a15fb709370f')
      .then(res => {
        console.log(res)
      })
    setVisible(false);
  };
  
  return (
    <div className="shade">
      <span onClick={showDrawer}>
        筛选
      </span>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        style={{width:"100%"}}
      >
        <div className="ShadeTypes">
          <ShadeType />
        </div>
        <div className="ShadePrices">
          <ShadePrice/>
        </div>
        <div className="ShadeBrands">
          <ShadeBrand/>
        </div>
        <div className="ShadeSelectives">
          <ShadeSelective/>
        </div>
      </Drawer>
    </div>
  );
};
