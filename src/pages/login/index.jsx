import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import { connect } from 'react-redux'
import { getUser } from '@/actions/login'
import axios from 'axios'
import './style.less'
export default
@connect((state) => ({}), {
  getUser: getUser.login
})
@Form.create()
class extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getUser(values)
          .then( res => {
            localStorage.token=res.payload.result
            if(res.payload.code == 200) {
              message.success('登录成功')
              this.props.history.push('/')
            } else {
              message.success('登录失败')
            }
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="pages_login_box">
        <div className="pages_login_form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="UserName"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('passWord', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                Log in
              </Button>
              
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}