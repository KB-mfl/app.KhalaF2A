import React from 'react'
import http from '../service'
import { message } from 'antd'
import sha256 from 'sha256'
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      usernameValidate: '',
      startUsernameValidate: false,
      emailValidate: '',
      startEmailValidate: false,
      submiting: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({submiting: true})
        http.post('auth/register', {
          username: values.username,
          password: sha256(values.password),
          email: values.email
        }).then(r => {
          message.success('注册成功，请登录', 1).then(() => {
            this.setState({submiting: false})
            window.location.reload();
          })
        }).catch(e => {
          this.setState({submiting: false})
        })
      } else {
        message.error('表单填写有误')
      }
    });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  usernameValidating = () => {
    const form = this.props.form;
    this.setState({startUsernameValidate: true})
    let username = form.getFieldsValue(['username'])
    console.log(username)
    http.get('/valid/username', {params: {username: username}}).then(r => {

    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout="vertical">
        <FormItem
          label="用户名"
        >
          {getFieldDecorator('username', {
            rules: [{
              type: 'string',
              pattern: /^([a-zA-Z][a-zA-Z0-9_]{0,9})$|^([\u4e00-\u9fa5]{1,10})$/,
              message: '请检查用户名(以英文字母或中文字符开头，不超过10个字符)'
            }, {
              required: true, message: '请输入用户名',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="邮箱">
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请检查邮箱格式',
            }, {
              required: true, message: '请输入邮箱',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem label="确认密码">
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次确认密码',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{width: '100%'}} loading={this.state.submiting}>注册</Button>
        </FormItem>
      </Form>
    )
  }
}
const WrappedRegistrationForm = Form.create()(register);

export default WrappedRegistrationForm