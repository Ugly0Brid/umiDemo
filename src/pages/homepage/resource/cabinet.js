import React from 'react';
import {connect} from 'dva';
import {Table, Divider} from 'antd';


function Cabinet(resource) {
  const {dataSource} = resource.resource;
  const columns = [{
    title: '机柜名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  }, {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
  }, {
    title: '更新时间',
    key: 'update_time',
    dataIndex: 'update_time',
  }, {
    title: '操作',
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
  );
}

export default connect(({resource}) => ({resource}))(Cabinet);
