import React from 'react';
import Link from 'umi/link';
import {connect} from 'dva';
import {Layout, Menu} from 'antd';

const {Header} = Layout;


function layout(props) {
  const Logout = () => {
    props.dispatch({type: 'Login/logout', payload: {username: 'admin'}})
  };
  return (
    <Layout className="layout">
      <Header>
        <div style={{width: 120, height: 31, margin: '16px 28px 16px 0', float: 'left', background: 'rgba(255, 255, 255, .2)', textAlign: 'center'}}>
          <div style={{fontSize: 24, marginTop: -15, color: "gold"}}>U M I</div>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.location.pathname]} style={{lineHeight: '64px'}}>
          <Menu.Item key="/homepage"><Link to="/homepage">主页</Link></Menu.Item>
          <Menu.Item key="/homepage/resource/"><Link to="/homepage/resource/">资源管理</Link></Menu.Item>
          <Menu.Item key="/homepage/product/"><Link to="/homepage/product/">列表</Link></Menu.Item>
          <Menu.Item key="/out" onClick={Logout} style={{float: "right"}}>退出</Menu.Item>
        </Menu>
      </Header>
      <div style={{background: '#fff'}}>{props.children}</div>
    </Layout>
  )
}

export default connect(({Login}) => ({Login}))(layout)
