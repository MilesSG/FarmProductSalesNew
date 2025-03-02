import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 页面加载时检查登录状态
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // 处理登录成功
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // 处理登出
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  )
}

export default App
