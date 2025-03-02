import React from 'react';
import { Card, Row, Col, Typography, Tag, Space, Rate, Button } from 'antd';
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from '../data/products';

const { Meta } = Card;
const { Text, Paragraph } = Typography;

interface CategoryProductsProps {
  products: Product[];
  category: string;
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (id: number) => void;
  favorites: Set<number>;
}

// 类别标题映射
const categoryTitles: Record<string, string> = {
  'all': '全部商品',
  'vegetables': '新鲜蔬菜',
  'fruits': '时令水果',
  'leaf-vegetables': '新鲜叶菜',
  'root-vegetables': '根茎类蔬菜',
  'fruit-vegetables': '果菜类',
  'mushrooms': '新鲜菇菌',
  'tropical-fruits': '热带水果',
  'berries': '浆果类水果',
  'citrus': 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=1200&q=80',
  'seasonal-fruits': '应季水果',
  'rice': '优质大米',
  'flour': '面粉面点',
  'noodles': '各式面条',
  'oils': '健康食用油',
  'milk': '新鲜牛奶',
  'yogurt': '酸奶乳品',
  'cheese': '进口奶酪',
  'eggs': '新鲜禽蛋',
  'pork': '优质猪肉',
  'beef': '精选牛肉',
  'poultry': '家禽肉类',
  'seafood': '海鲜水产',
  'grains': '粮油米面',
  'dairy': '乳品蛋类',
  'meat': '肉禽水产',
  'organic': '有机食品',
  'local': '本地直供',
};

// 类别描述映射
const categoryDescriptions: Record<string, string> = {
  'all': '我们提供各类优质农产品，满足您的一站式购物需求',
  'vegetables': '每日新鲜配送，从田间到餐桌只需24小时',
  'fruits': '来自全球各地的时令水果，保证新鲜美味',
  'leaf-vegetables': '绿叶菜富含叶绿素和多种维生素，是健康饮食的基础',
  'root-vegetables': '根茎类蔬菜营养丰富，适合炖煮与烹饪各类菜肴',
  'fruit-vegetables': '既有蔬菜的营养，又有水果的甜美',
  'mushrooms': '菇菌类富含蛋白质和多种微量元素，口感独特',
  'tropical-fruits': '来自热带地区的异域水果，风味独特',
  'berries': '小巧多汁的浆果，富含抗氧化物质',
  'citrus': '维C丰富的柑橘类水果，酸甜可口',
  'seasonal-fruits': '应季水果，当季最佳品质与口感',
  'rice': '来自优质产区的各类大米，煮饭香糯可口',
  'flour': '精选面粉，适合烘焙与制作传统面点',
  'noodles': '各式手工与机制面条，口感筋道',
  'oils': '冷榨与压榨食用油，健康烹饪的首选',
  'milk': '新鲜牛奶，优质奶源，营养丰富',
  'yogurt': '多种口味酸奶，活性益生菌，健康肠胃',
  'cheese': '进口与国产奶酪，丰富您的饮食选择',
  'eggs': '放心禽蛋，富含优质蛋白质',
  'pork': '本地与进口猪肉，肉质鲜嫩',
  'beef': '草饲牛肉，口感鲜美，营养丰富',
  'poultry': '散养家禽，肉质细嫩，风味独特',
  'seafood': '深海鱼虾贝类，每日新鲜直达',
  'grains': '优质粮油米面，厨房必备食材',
  'dairy': '鲜奶乳制品与优质禽蛋，营养早餐必选',
  'meat': '优质肉类与海鲜水产，满足您的蛋白质需求',
  'organic': '有机认证食品，无农残，更健康',
  'local': '本地直供农产品，支持当地农业发展',
};

// 类别背景图片
const categoryBanners: Record<string, string> = {
  'all': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  'vegetables': 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1200&q=80',
  'fruits': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80',
  'leaf-vegetables': 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=1200&q=80',
  'root-vegetables': 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=1200&q=80',
  'fruit-vegetables': 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&h=400&q=80',
  'mushrooms': 'https://images.unsplash.com/photo-1607328874071-45a9cd600644?auto=format&fit=crop&w=1200&q=80',
  'tropical-fruits': 'https://images.unsplash.com/photo-1543076499-a6133cb932fd?auto=format&fit=crop&w=1200&q=80',
  'berries': 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&h=400&q=80',
  'citrus': 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=1200&q=80',
  'seasonal-fruits': 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=1200&q=80',
  'rice': 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&h=400&q=80',
  'flour': 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&h=400&q=80',
  'noodles': 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?auto=format&fit=crop&w=1200&q=80',
  'oils': 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80',
  'milk': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1200&q=80',
  'yogurt': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
  'cheese': 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&q=80',
  'eggs': 'https://images.unsplash.com/photo-1491524062933-cb0289261700?auto=format&fit=crop&w=1200&q=80',
  'pork': 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80',
  'beef': 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&h=400&q=80',
  'poultry': 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80',
  'seafood': 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&h=400&q=80',
  'grains': 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80',
  'dairy': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80',
  'meat': 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80',
  'organic': 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=1200&q=80',
  'local': 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
};

const CategoryProducts: React.FC<CategoryProductsProps> = ({
  products,
  category,
  onProductSelect,
  onAddToCart,
  onToggleFavorite,
  favorites
}) => {
  const title = categoryTitles[category] || '商品列表';
  const description = categoryDescriptions[category] || '';
  const bannerUrl = categoryBanners[category] || categoryBanners['all'];

  return (
    <div style={{ width: '100%' }}>
      <div 
        style={{ 
          position: 'relative', 
          height: '180px', 
          marginBottom: '20px',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bannerUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px',
            color: 'white'
          }}
        >
          <Typography.Title level={2} style={{ color: 'white', margin: 0 }}>
            {title}
          </Typography.Title>
          <Typography.Paragraph style={{ color: 'white', margin: '10px 0 0', fontSize: '16px' }}>
            {description}
          </Typography.Paragraph>
        </div>
      </div>

      <Row gutter={[16, 24]}>
        {products.length === 0 ? (
          <Col span={24}>
            <Card style={{ textAlign: 'center' }}>
              <Text strong>该分类暂无商品</Text>
            </Card>
          </Col>
        ) : (
          products.map(product => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                hoverable
                cover={
                  <img 
                    alt={product.name} 
                    src={product.imageUrl} 
                    style={{ height: 200, objectFit: 'cover' }}
                    onClick={() => onProductSelect(product)}
                  />
                }
                actions={[
                  <Button 
                    type="text" 
                    icon={favorites.has(product.id) ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
                    onClick={() => onToggleFavorite(product.id)}
                  >
                    收藏
                  </Button>,
                  <Button 
                    type="text" 
                    icon={<ShoppingCartOutlined />}
                    onClick={() => onAddToCart(product)}
                  >
                    购买
                  </Button>
                ]}
              >
                <Meta
                  title={
                    <Space>
                      {product.name}
                      {product.isOrganic && (
                        <Tag color="green">有机</Tag>
                      )}
                    </Space>
                  }
                  description={
                    <>
                      <Paragraph ellipsis={{ rows: 2 }}>
                        {product.description}
                      </Paragraph>
                      <Space direction="vertical">
                        <Rate disabled defaultValue={product.rating} allowHalf style={{ fontSize: 12 }} />
                        <Space>
                          <Text type="danger" strong>¥{product.price}</Text>
                          <Text type="secondary">/ {product.unit}</Text>
                        </Space>
                      </Space>
                    </>
                  }
                />
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default CategoryProducts; 