import React, { useState } from 'react'
import { Drawer } from 'antd'
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
