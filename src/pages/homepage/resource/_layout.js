import React from 'react';
import Link from 'umi/link';
import {Layout, Menu, Breadcrumb} from 'antd';

const {Sider, Content} = Layout;

export default function (props) {
  const breadcrumbNameMap = {
    '/homepage/resource/': '资源管理 / 资源 / 机房',
    '/homepage/resource/cabinet/': '资源管理 / 资源 / 机柜',
  };
  const pathSnippets = [props.location.pathname];
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        {breadcrumbNameMap[url]}
      </Breadcrumb.Item>
    );
  });
  return (
    <div>
      <Layout>
        <Sider width={200} style={{background: '#fff'}}>
          <Menu mode="inline" style={{height: '100%', borderRight: 0}} defaultSelectedKeys={["/homepage/resource/"]}>
            <Menu.Item key="/homepage/resource/"><Link to={"/homepage/resource/"}>机房</Link></Menu.Item>
            <Menu.Item key="/homepage/resource/cabinet/"><Link to={"/homepage/resource/cabinet/"}>机柜</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            {breadcrumbItems}
          </Breadcrumb>
          <Content style={{background: '#fff', minHeight: 800,}}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
