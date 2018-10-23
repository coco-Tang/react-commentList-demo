import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export default class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-header">
                    <QueueAnim>
                        <div key="demo1">依次进场</div>
                        <div key="demo2">依次进场</div>
                        <div key="demo3">依次进场</div>
                        <div key="demo4">依次进场</div>
                    </QueueAnim>
                </div>
                <div className="login-content">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </div>
                
            </div>
        )
    }
}