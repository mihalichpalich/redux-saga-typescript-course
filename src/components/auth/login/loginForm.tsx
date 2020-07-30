import React, { FormEvent } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { Link } from 'react-router-dom';

import './styles.scss';
import { ILoginArguments } from '../../../types/handlers/ILoginArguments';

interface ILoginFormProps extends FormComponentProps {
    handleSubmit(values: ILoginArguments): void,
    handleError(error: any): void,
}

const LoginForm = ({form, handleError, handleSubmit}: ILoginFormProps) => {
    const onSubmit = (e: FormEvent): void => {
        e.preventDefault();

        form.validateFields((error, values) => {
            if (error) {
                return handleError(error);
            }
            handleSubmit(values);
        });
    };

    return (
        <Form onSubmit={onSubmit} className="login-form">
            <h3 className="main-label">LOG IN</h3>

            <Form.Item>
                {form.getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please add your email!' }],
                })(
                    <Input
                        type="email"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />,
                )}
            </Form.Item>

            <Form.Item>
                {form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please add your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>

            <Form.Item>
                {form.getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}

                <Link to="/forgot" className="login-form-forgot">
                    Forgot password
                </Link>

                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>

                Or <Link to="/signup">register now!</Link>
            </Form.Item>
        </Form>
    )
};

export default Form.create<ILoginFormProps>({ name: 'LoginForm' })(LoginForm);
