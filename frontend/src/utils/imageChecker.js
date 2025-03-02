// 图片检查工具
// 用于检测图片URL是否有效，替换无效图片URL

import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 待检查的图片来源文件
const sourceFiles = [
  '../data/products.ts',
  '../components/CategoryProducts.tsx',
  '../components/HomeBanner.tsx'
];

// 替代图片URL
const fallbackImages = [
  'https://images.unsplash.com/photo-1546630392-db5b1f04874a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1553546895-531931aa1aa8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546630392-db5b1f04874a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1457296898342-cdd24585d095?auto=format&fit=crop&w=800&q=80'
];

// 检查单个图片URL是否有效
async function checkImageUrl(url) {
  try {
    const response = await axios.head(url, { timeout: 5000 });
    return response.status === 200;
  } catch (error) {
    console.error(`图片访问失败: ${url}`);
    return false;
  }
}

// 从文件内容中提取所有图片URL
function extractImageUrls(content) {
  const regex = /https:\/\/images\.unsplash\.com\/[^"'\s]+/g;
  return content.match(regex) || [];
}

// 获取随机替代图片
function getRandomFallbackImage() {
  const randomIndex = Math.floor(Math.random() * fallbackImages.length);
  return fallbackImages[randomIndex];
}

// 处理主函数
async function processImages() {
  // 获取项目根目录路径
  const rootDir = path.resolve(__dirname, '..');
  
  for (const sourceFile of sourceFiles) {
    const filePath = path.join(rootDir, sourceFile);
    
    try {
      // 读取文件内容
      const content = fs.readFileSync(filePath, 'utf8');
      
      // 提取所有图片URL
      const imageUrls = extractImageUrls(content);
      console.log(`在文件 ${sourceFile} 中找到 ${imageUrls.length} 个图片URL`);
      
      // 检查每个URL并收集结果
      let updatedContent = content;
      let replacedCount = 0;
      
      for (const url of imageUrls) {
        const isValid = await checkImageUrl(url);
        
        if (!isValid) {
          // 替换无效的URL
          const fallbackUrl = getRandomFallbackImage();
          updatedContent = updatedContent.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fallbackUrl);
          replacedCount++;
          console.log(`替换: ${url} -> ${fallbackUrl}`);
        }
      }
      
      // 如果有URL被替换，更新文件
      if (replacedCount > 0) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`在文件 ${sourceFile} 中替换了 ${replacedCount} 个无效图片URL`);
      } else {
        console.log(`文件 ${sourceFile} 中的所有图片URL都有效`);
      }
      
    } catch (error) {
      console.error(`处理文件 ${sourceFile} 时出错:`, error);
    }
  }
  
  console.log('图片检查和替换完成！');
}

// 执行脚本
processImages().catch(error => {
  console.error('脚本执行失败:', error);
}); 