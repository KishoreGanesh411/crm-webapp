import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
export const LoginSignupForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // onFinish is called with validated form values
  const onFinish = (values: { email: string; password: string }) => {
    console.log('Login values:', values);

    // Here you can do your login API call and validation
    // For now, simulate success:
    const loginSuccess = true;

    if (loginSuccess) {
      navigate('/dashboard'); // Redirect on success
    } else {
      alert('Login failed');
    }
  };

  return (
    <Form
      layout="vertical"
      className="login-form"
      form={form}
      name="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        className="form-input"
        rules={[
          {
            required: true,
            message: 'Enter email',
          },
          {
            type: 'email',
            message: 'Enter a valid email!',
          },
        ]}
      >
        <Input
          suffix={<MailOutlined className="text-primary" />}
          placeholder="Email Address"
        />
      </Form.Item>
      <Form.Item
        name="password"
        className="form-input"
        rules={[
          {
            required: true,
            message: 'Enter password',
          },
        ]}
      >
        <Input.Password
          suffix={<LockOutlined className="text-primary" />}
          placeholder="Enter Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          className="form-button"
          htmlType="submit"
          block
          // loading={loading}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
