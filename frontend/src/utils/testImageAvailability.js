// 图片可用性测试工具
// 用于测试特定图片URL是否可以成功访问

import axios from 'axios';

// 要测试的图片URL列表
const imagesToTest = [
  // 柑橘类产品图片
  "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80", // 四川柑橘
  "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80", // 福建蜜柚
  "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80", // 有机柠檬
  "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=800&q=80", // 血橙
  
  // 柑橘类横幅
  "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=1200&q=80",
  
  // 其他可能有问题的图片
  "https://images.unsplash.com/photo-1546630392-db5b1f04874a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582087463261-ddea03f80e5d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1546630392-db5b1f04874a?auto=format&fit=crop&w=800&q=80"
];

// 测试图片可用性
async function testImage(url) {
  console.log(`测试图片: ${url}`);
  try {
    const response = await axios.head(url, { timeout: 5000 });
    console.log(`状态: ${response.status === 200 ? '可用 ✅' : '不可用 ❌'}`);
    return response.status === 200;
  } catch (error) {
    console.log(`状态: 不可用 ❌ (${error.message})`);
    return false;
  }
}

// 测试所有图片
async function testAllImages() {
  console.log('开始测试图片可用性...\n');
  
  let available = 0;
  let unavailable = 0;
  
  for (const imageUrl of imagesToTest) {
    const isAvailable = await testImage(imageUrl);
    isAvailable ? available++ : unavailable++;
    console.log('-'.repeat(80));
  }
  
  console.log(`\n测试完成: ${available} 个图片可用, ${unavailable} 个图片不可用`);
}

// 执行测试
testAllImages().catch(error => {
  console.error('测试过程中出错:', error);
}); 