import React from 'react'
import {connect} from 'dva';
import {Table, Divider} from 'antd';

function IndexPage(resource) {
  const {dataSource} = resource.resource;
  const columns = [{
    title: '机房名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '带宽',
    dataIndex: 'bandwidth',
    key: 'bandwidth',
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '创建时间',
    key: 'create_time',
    dataIndex: 'create_time',
  }, {
    title: '更新时间',
    key: 'update_time',
    dataIndex: 'update_time',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical"/>
        <a href="javascript:;">Delete</a>
        </span>
    ),
  }];

  return (
    <div>
      <Table columns={columns} dataSource={dataSource}/>
    </div>
  )
}

export default connect(({resource}) => ({resource}))(IndexPage);
