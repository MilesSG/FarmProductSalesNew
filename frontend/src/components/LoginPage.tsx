import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
}

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (values: LoginFormValues) => {
    setLoading(true);
    
    // 模拟登录请求
    setTimeout(() => {
      if (values.username === 'admin' && values.password === 'admin') {
        // 登录成功
        localStorage.setItem('isLoggedIn', 'true');
        message.success('登录成功');
        onLoginSuccess();
      } else {
        // 登录失败
        message.error('用户名或密码错误');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <Card 
        className="max-w-md w-full"
        style={{ 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
          borderRadius: '8px'
        }}
      >
        <div className="text-center mb-8">
          <Title level={2} style={{ color: '#1e88e5' }}>鲜悦优选</Title>
          <Title level={4} style={{ fontWeight: 'normal', marginTop: 0 }}>管理系统登录</Title>
        </div>
        
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          size="large"
          className="max-w-sm mx-auto"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="用户名 (admin)" 
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="密码 (admin)"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full"
              loading={loading}
              style={{ backgroundColor: '#1e88e5', height: '45px' }}
            >
              登录
            </Button>
          </Form.Item>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            提示: 用户名和密码都是 admin
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage; 