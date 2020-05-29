import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


const { confirm } = Modal;
function showDeleteConfirm() {
  confirm({
    title: '确认要删除吗?',
    icon: <ExclamationCircleOutlined />,
    okText: 'Yes',
    okType: 'danger',
    cancelText: '取消',
    onOk() {
      console.log('确认');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}
export default class index extends Component {
  render() {
    return (
      <div>
        <Button onClick={showDeleteConfirm} type="dashed">
          删除
        </Button>
      </div>
    )
  }
}
