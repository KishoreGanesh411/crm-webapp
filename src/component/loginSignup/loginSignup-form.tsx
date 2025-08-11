import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
// import { useState } from 'react';
export const LoginSignupForm: React.FC = () => {
  const [form] = Form.useForm();
  // const [loading, setLoading] = useState<boolean>(false);

  // const clickLogin = async () => {
  //   try {
  //     const values = await form.validateFields();
  //     setLoading(true);
  //     // Temporarily log the values instead of actual auth
  //     console.log('Login values:', values);
  //     message.success('Login submitted!');
  //   } catch (error) {
  //     message.error('Validation failed!');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Form
      layout="vertical"
      className="login-form"
      form={form}
      name="login-form"
      // onFinish={clickLogin}
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
