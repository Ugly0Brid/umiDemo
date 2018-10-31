import styles from './index.css';
import React from 'react';
import {connect} from 'dva';

import {Form, Input, Icon, Button} from 'antd';

const FormItem = Form.Item;

function LoginPage({dispatch, Login, form: {getFieldDecorator, validateFieldsAndScroll}}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({type: "Login/loginIn", payload: {"username": "admin", "password": "zfj"}});
      }
    });
  };
  return (
    <div className={styles.normal}>
      <div style={{backgroundColor: "#FFF", height: 270, width: 370}}>
        <div style={{paddingLeft: '35%', paddingTop: "5%"}}>SaltOps运维平台</div>
        <Form onSubmit={handleSubmit} style={{maxWidth: '300px', minWidth: '300px', paddingLeft: "15%", paddingTop: "5%"}}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="密码"/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" style={{width: '100%'}}> 登录 </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}

export default connect(({Login}) => ({Login}))((Form.create({})(LoginPage)));
