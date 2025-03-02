// 柑橘类产品图片修复工具
// 专门针对柑橘类水果的图片进行检查和替换

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 柑橘类水果的产品ID
const citrusProductIds = [37, 38, 39, 40];

// 可靠的柑橘类水果替代图片
const citrusReplacements = {
  37: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80', // 橙子
  38: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80', // 柚子
  39: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80', // 柠檬
  40: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=800&q=80'  // 血橙
};

// 柑橘类分类横幅替代图片
const citrusBannerReplacement = 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=1200&q=80';

// 检查图片是否可访问
async function checkImageAvailability(url) {
  try {
    const response = await axios.head(url, { timeout: 5000 });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

// 替换产品文件中的柑橘类图片
async function fixCitrusProductImages() {
  const productsFilePath = path.resolve(__dirname, '../data/products.ts');
  
  try {
    let content = fs.readFileSync(productsFilePath, 'utf8');
    let replacedCount = 0;
    
    // 检查每个柑橘类产品的图片
    for (const id of citrusProductIds) {
      const regex = new RegExp(`id: ${id},[\\s\\S]*?imageUrl: ["']([^"']+)["']`, 'g');
      const match = regex.exec(content);
      
      if (match) {
        const currentUrl = match[1];
        const isValid = await checkImageAvailability(currentUrl);
        
        if (!isValid) {
          // 替换为可靠的替代图片
          const newUrl = citrusReplacements[id];
          content = content.replace(currentUrl, newUrl);
          console.log(`替换产品ID ${id} 的图片: ${currentUrl} -> ${newUrl}`);
          replacedCount++;
        } else {
          console.log(`产品ID ${id} 的图片有效: ${currentUrl}`);
        }
      }
    }
    
    // 如果有替换，更新文件
    if (replacedCount > 0) {
      fs.writeFileSync(productsFilePath, content, 'utf8');
      console.log(`成功替换了 ${replacedCount} 个柑橘类产品图片`);
    } else {
      console.log('所有柑橘类产品图片都有效');
    }
    
  } catch (error) {
    console.error('修复产品图片时出错:', error);
  }
}

// 替换分类横幅中的柑橘类图片
async function fixCitrusBanner() {
  const categoryFilePath = path.resolve(__dirname, '../components/CategoryProducts.tsx');
  
  try {
    let content = fs.readFileSync(categoryFilePath, 'utf8');
    
    // 查找柑橘类横幅图片
    const regex = /'citrus': '([^']+)'/;
    const match = regex.exec(content);
    
    if (match) {
      const currentUrl = match[1];
      const isValid = await checkImageAvailability(currentUrl);
      
      if (!isValid) {
        // 替换为可靠的替代图片
        content = content.replace(currentUrl, citrusBannerReplacement);
        fs.writeFileSync(categoryFilePath, content, 'utf8');
        console.log(`替换柑橘类横幅图片: ${currentUrl} -> ${citrusBannerReplacement}`);
      } else {
        console.log(`柑橘类横幅图片有效: ${currentUrl}`);
      }
    }
    
  } catch (error) {
    console.error('修复横幅图片时出错:', error);
  }
}

// 运行修复流程
async function runFix() {
  console.log('开始修复柑橘类产品图片...');
  await fixCitrusProductImages();
  
  console.log('\n开始修复柑橘类横幅图片...');
  await fixCitrusBanner();
  
  console.log('\n柑橘类图片修复完成!');
}

// 执行修复
runFix().catch(error => {
  console.error('脚本执行失败:', error);
}); 