import React from 'react';
import { Carousel, Image, Button, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

// 轮播图数据
const bannerData = [
  {
    id: 1,
    title: '有机蔬果新鲜上市',
    description: '来自高山有机农场，健康生活从有机饮食开始',
    imageUrl: 'https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?auto=format&w=1200&h=400&fit=crop&q=80',
    link: '/category/organic'
  },
  {
    id: 2,
    title: '新鲜水果季',
    description: '精选时令水果，每一口都是大自然的馈赠',
    imageUrl: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&w=1200&h=400&fit=crop&q=80',
    link: '/category/fruits'
  },
  {
    id: 3,
    title: '春季蔬菜上新',
    description: '24小时从田间到餐桌，保证新鲜口感',
    imageUrl: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&w=1200&h=400&fit=crop&q=80',
    link: '/category/vegetables'
  },
  {
    id: 4,
    title: '产地直销优惠',
    description: '来自全国各地的特色农产品，直达您的餐桌',
    imageUrl: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&w=1200&h=400&fit=crop&q=80',
    link: '/promotion/direct'
  }
];

interface HomeBannerProps {
  onNavigate: (url: string) => void;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ onNavigate }) => {
  return (
    <Carousel 
      autoplay 
      effect="fade"
      className="home-banner"
    >
      {bannerData.map(banner => (
        <div key={banner.id} className="banner-slide">
          <div 
            className="banner-content" 
            style={{ 
              position: 'relative', 
              height: '400px', 
              overflow: 'hidden',
              borderRadius: '8px'
            }}
          >
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              preview={false}
              style={{ 
                width: '100%', 
                height: '400px', 
                objectFit: 'cover' 
              }}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0,
              padding: '40px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
              color: 'white'
            }}>
              <Title level={2} style={{ color: 'white', margin: 0 }}>
                {banner.title}
              </Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginTop: '8px' }}>
                {banner.description}
              </Paragraph>
              <Button 
                type="primary" 
                size="large"
                ghost
                icon={<RightOutlined />}
                onClick={() => onNavigate(banner.link)}
                style={{ marginTop: '16px', borderRadius: '24px' }}
              >
                查看详情
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeBanner; 