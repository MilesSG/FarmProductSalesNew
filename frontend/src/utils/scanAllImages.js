// 项目图片扫描工具
// 用于扫描整个项目中的所有图片URL并检查其可访问性

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { exec } from 'child_process';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

// 将exec转换为Promise
const execAsync = promisify(exec);

// 待检查的文件后缀
const FILE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json'];

// 替代图片URL资源池
const FALLBACK_IMAGES = {
  // 基础替代图片（适用于所有类别）
  'default': [
    'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1546630392-db5b1f04874a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
  ],
  // 蔬菜类替代图片
  'vegetables': [
    'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  ],
  // 水果类替代图片
  'fruits': [
    'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1521732670659-b8c918da61dc?auto=format&fit=crop&w=800&q=80'
  ],
  // 柑橘类替代图片
  'citrus': [
    'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80'
  ],
  // 横幅图片替代
  'banner': [
    'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&h=400&q=80',
    'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&h=400&q=80',
    'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&h=400&q=80'
  ]
};

// 从URL猜测类别，用于选择合适的替代图片
function guessCategoryFromUrl(url, fileContent) {
  const lowerUrl = url.toLowerCase();
  
  // 检查URL是否包含尺寸信息，判断是否为横幅
  if (lowerUrl.includes('w=1200') || lowerUrl.includes('h=400')) {
    return 'banner';
  }
  
  // 搜索文件内容查找与URL相关的类别信息
  if (fileContent.includes('citrus') && (fileContent.includes('柑橘') || fileContent.includes('柠檬') || fileContent.includes('橙子'))) {
    return 'citrus';
  } else if (fileContent.includes('vegetables') || fileContent.includes('蔬菜')) {
    return 'vegetables';
  } else if (fileContent.includes('fruits') || fileContent.includes('水果')) {
    return 'fruits';
  }
  
  // 如果无法确定，使用默认类别
  return 'default';
}

// 获取一个随机的替代图片
function getFallbackImage(category = 'default') {
  const images = FALLBACK_IMAGES[category] || FALLBACK_IMAGES.default;
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// 检查图片URL是否可以访问
async function isImageAccessible(url) {
  try {
    const response = await axios.head(url, { 
      timeout: 5000,
      headers: {
        // 一些常见的请求头，减少被服务器拒绝的可能性
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    return response.status === 200;
  } catch (error) {
    console.log(`图片访问失败: ${url} - ${error.message}`);
    return false;
  }
}

// 从文件内容中提取所有Unsplash图片URL
function extractUnsplashUrls(content) {
  const regex = /https:\/\/images\.unsplash\.com\/[^"'\s]+/g;
  return Array.from(new Set(content.match(regex) || []));
}

// 递归查找所有符合扩展名的文件
async function findFiles(dir, extensions) {
  const result = [];
  
  try {
    const items = await fs.promises.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // 排除node_modules和.git目录
        if (item.name !== 'node_modules' && item.name !== '.git' && item.name !== 'dist') {
          const subFiles = await findFiles(fullPath, extensions);
          result.push(...subFiles);
        }
      } else if (extensions.some(ext => item.name.endsWith(ext))) {
        result.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`读取目录 ${dir} 时出错:`, error);
  }
  
  return result;
}

// 处理单个文件
async function processFile(filePath) {
  let replaced = false;
  let replacedCount = 0;
  
  try {
    let content = await fs.promises.readFile(filePath, 'utf8');
    const originalContent = content;
    
    // 提取所有Unsplash图片URL
    const urls = extractUnsplashUrls(content);
    
    if (urls.length > 0) {
      console.log(`\n处理文件: ${path.relative(rootDir, filePath)}`);
      console.log(`找到 ${urls.length} 个Unsplash图片URL`);
      
      // 检查每个URL并替换不可访问的URL
      for (const url of urls) {
        const accessible = await isImageAccessible(url);
        
        if (!accessible) {
          // 根据URL和文件内容猜测类别
          const category = guessCategoryFromUrl(url, content);
          const fallbackUrl = getFallbackImage(category);
          
          // 使用正则表达式替换所有匹配的URL，确保匹配完整URL
          const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(escapedUrl, 'g');
          content = content.replace(regex, fallbackUrl);
          
          console.log(`  替换: ${url}`);
          console.log(`     → ${fallbackUrl} (${category}类)`);
          replacedCount++;
          replaced = true;
        } else {
          console.log(`  有效: ${url}`);
        }
      }
      
      // 如果有URL被替换，更新文件
      if (replaced) {
        await fs.promises.writeFile(filePath, content, 'utf8');
        console.log(`  已替换 ${replacedCount} 个URL并更新文件`);
      } else {
        console.log(`  所有URL都有效，无需更新文件`);
      }
    }
    
    return replacedCount;
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
    return 0;
  }
}

// 主函数
async function main() {
  try {
    console.log('==== 项目图片扫描和修复工具 ====');
    
    // 查找所有符合条件的文件
    console.log('正在查找项目文件...');
    const files = await findFiles(rootDir, FILE_EXTENSIONS);
    console.log(`找到 ${files.length} 个文件需要检查\n`);
    
    // 处理每个文件
    let totalReplaced = 0;
    for (const file of files) {
      const count = await processFile(file);
      totalReplaced += count;
    }
    
    // 总结
    console.log('\n==== 扫描完成 ====');
    console.log(`共处理文件: ${files.length} 个`);
    console.log(`共替换无效图片URL: ${totalReplaced} 个`);
    
    // 如果有图片被替换，提示重启开发服务器
    if (totalReplaced > 0) {
      console.log('\n提示: 有图片URL被替换，请重启开发服务器以应用更改。');
    }
    
  } catch (error) {
    console.error('扫描过程中出错:', error);
  }
}

// 执行主函数
main(); 