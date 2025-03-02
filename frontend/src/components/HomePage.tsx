import React, { useState, useEffect } from 'react';
import { Layout, Typography, Card, Row, Col, Rate, Tag, Button, Divider, Tabs, Menu } from 'antd';
import { ShoppingCartOutlined, BarChartOutlined, PieChartOutlined, LineChartOutlined, HomeOutlined, AreaChartOutlined, AppstoreOutlined } from '@ant-design/icons';
import { products } from '../data/products';
import ReactECharts from 'echarts-for-react';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

// 设置主题色
const primaryColor = '#1e88e5'; // 蓝色主题
const secondaryColor = '#64b5f6'; // 浅蓝色

// 按类别统计产品数量
const getCategoryData = () => {
  const categoryMap: Record<string, number> = {};
  
  products.forEach(product => {
    if (!categoryMap[product.category]) {
      categoryMap[product.category] = 0;
    }
    categoryMap[product.category]++;
  });
  
  return Object.entries(categoryMap).map(([name, value]) => ({ name, value }));
};

// 转换类别名称为中文
const getCategoryName = (category: string): string => {
  const categoryNames: Record<string, string> = {
    vegetables: "蔬菜",
    fruits: "水果",
    grains: "谷物",
    dairy: "乳制品",
    meat: "肉类",
    seafood: "海鲜",
    herbs: "草药"
  };
  
  return categoryNames[category] || category;
};

interface HomePageProps {
  onLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
  const [salesData, setSalesData] = useState<number[]>([]);
  const [activeMenuKey, setActiveMenuKey] = useState<string>('home');
  
  // 模拟动态销售数据
  useEffect(() => {
    const generateRandomData = () => {
      const newData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 200);
      setSalesData(newData);
    };
    
    generateRandomData();
    const intervalId = setInterval(generateRandomData, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // 销售趋势图配置
  const getSalesOption = () => {
    return {
      title: {
        text: '本周销售趋势',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: primaryColor
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value',
        name: '销售额 (¥)'
      },
      series: [
        {
          data: salesData,
          type: 'line',
          smooth: true,
          areaStyle: {
            opacity: 0.3
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }
      ],
      color: [primaryColor]
    };
  };
  
  // 产品类别分布图配置
  const getCategoryOption = () => {
    const categoryData = getCategoryData();
    return {
      title: {
        text: '产品类别分布',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: primaryColor
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: categoryData.map(item => getCategoryName(item.name)),
        textStyle: {
          color: primaryColor
        }
      },
      series: [
        {
          name: '产品类别',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
              color: primaryColor
            }
          },
          labelLine: {
            show: false
          },
          data: categoryData.map(item => ({
            name: getCategoryName(item.name),
            value: item.value
          }))
        }
      ],
      color: ['#1e88e5', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#e3f2fd', '#b3e5fc']
    };
  };
  
  // 产品评分对比图配置
  const getRatingOption = () => {
    return {
      title: {
        text: '产品评分对比',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: primaryColor
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 5,
        name: '评分'
      },
      yAxis: {
        type: 'category',
        data: products.map(p => p.name),
        axisLabel: {
          interval: 0,
          width: 80,
          overflow: 'truncate',
          color: primaryColor
        }
      },
      series: [
        {
          name: '评分',
          type: 'bar',
          data: products.map(p => p.rating)
        }
      ],
      color: [secondaryColor]
    };
  };

  // 处理菜单项点击
  const handleMenuClick = (e: {key: string}) => {
    setActiveMenuKey(e.key);
  };

  // 渲染数据分析内容
  const renderDataAnalysis = () => {
    return (
      <Card className="bg-white rounded-lg shadow-md mt-6">
        <Title level={4} className="mb-4" style={{ color: primaryColor }}>
          <BarChartOutlined className="mr-2" />
          销售数据分析
        </Title>
        <Tabs defaultActiveKey="1" type="card" style={{ color: primaryColor }}>
          <TabPane 
            tab={<span><LineChartOutlined /> <span style={{ color: primaryColor }}>销售趋势</span></span>}
            key="1"
          >
            <ReactECharts option={getSalesOption()} style={{ height: '350px' }} />
          </TabPane>
          <TabPane 
            tab={<span><PieChartOutlined /> <span style={{ color: primaryColor }}>分类分布</span></span>}
            key="2"
          >
            <ReactECharts option={getCategoryOption()} style={{ height: '350px' }} />
          </TabPane>
          <TabPane 
            tab={<span><BarChartOutlined /> <span style={{ color: primaryColor }}>产品评分</span></span>}
            key="3"
          >
            <ReactECharts option={getRatingOption()} style={{ height: '350px' }} />
          </TabPane>
        </Tabs>
      </Card>
    );
  };

  // 渲染产品列表
  const renderProductsList = () => {
    return (
      <>
        <div className="mt-6">
          <Divider style={{ borderColor: secondaryColor }}>
            <Title level={4} className="m-0" style={{ color: primaryColor }}>精选产品</Title>
          </Divider>
        </div>
        <Row gutter={[24, 24]} className="mt-6">
          {products.map(product => (
            <Col xs={24} sm={12} md={8} key={product.id}>
              <Card
                hoverable
                cover={
                  <div className="h-60 overflow-hidden">
                    <img
                      alt={product.name}
                      src={product.imageUrl}
                      className="w-full h-full object-cover"
                    />
                  </div>
                }
                className="h-full"
                style={{ boxShadow: '0 4px 8px rgba(30, 136, 229, 0.1)' }}
              >
                <Meta
                  title={
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg" style={{ color: primaryColor }}>{product.name}</span>
                      {product.isOrganic && (
                        <Tag color={primaryColor}>有机</Tag>
                      )}
                    </div>
                  }
                  description={
                    <div>
                      <Text className="text-xl font-bold block mb-2" style={{ color: '#e53935' }}>
                        ¥{product.price}/{product.unit}
                      </Text>
                      <div className="flex items-center mb-2">
                        <Rate disabled defaultValue={product.rating} style={{ fontSize: '16px', color: secondaryColor }} />
                        <Text className="ml-2" style={{ color: primaryColor }}>
                          ({product.reviews})
                        </Text>
                      </div>
                      <Text className="block mb-4 h-12 overflow-hidden" style={{ color: '#546e7a' }}>
                        {product.description}
                      </Text>
                      <Button
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        className="w-full"
                        size="large"
                        style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                      >
                        加入购物车
                      </Button>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* 顶部横幅 */}
      <div className="w-full bg-gray-900 text-center py-3 relative">
        <Typography.Title level={4} style={{ color: '#fff', margin: 0 }}>
          鲜悦优选
        </Typography.Title>
        <Button 
          type="link" 
          onClick={onLogout}
          style={{ 
            position: 'absolute', 
            right: '20px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: '#fff'
          }}
        >
          退出登录
        </Button>
      </div>
      
      {/* 导航菜单 */}
      <div className="bg-white shadow-md w-full sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Menu 
            mode="horizontal"
            selectedKeys={[activeMenuKey]}
            onClick={handleMenuClick}
            className="border-0 flex justify-center"
            style={{ fontSize: '16px' }}
          >
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <span style={{ color: activeMenuKey === 'home' ? primaryColor : undefined }}>首页</span>
            </Menu.Item>
            <Menu.Item key="analytics" icon={<AreaChartOutlined />}>
              <span style={{ color: activeMenuKey === 'analytics' ? primaryColor : undefined }}>销售数据分析</span>
            </Menu.Item>
            <Menu.Item key="products" icon={<AppstoreOutlined />}>
              <span style={{ color: activeMenuKey === 'products' ? primaryColor : undefined }}>全部产品</span>
            </Menu.Item>
          </Menu>
        </div>
      </div>

      {/* 主内容区 */}
      <Content className="container mx-auto px-4 py-6">
        {activeMenuKey === 'analytics' ? renderDataAnalysis() : renderProductsList()}
      </Content>

      {/* 购物车按钮 - 固定在右下角 */}
      <div className="fixed right-6 bottom-6 z-50">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<ShoppingCartOutlined />} 
          size="large" 
          style={{ 
            backgroundColor: primaryColor, 
            borderColor: primaryColor,
            width: '60px',
            height: '60px',
            fontSize: '24px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        />
      </div>

      <Footer className="text-center bg-white py-6" style={{ color: primaryColor, borderTop: `1px solid ${secondaryColor}` }}>
        鲜悦优选 ©{new Date().getFullYear()} FreshJoy Premium Selection
      </Footer>
    </Layout>
  );
};

export default HomePage;