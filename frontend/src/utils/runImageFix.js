// 图片修复脚本运行器
// 此脚本将运行所有图片修复工具

import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 转换exec为Promise格式
const execAsync = promisify(exec);

// 确保安装了所需的依赖
async function ensureDependencies() {
  try {
    await import('axios');
    console.log('已安装axios依赖，继续执行...');
  } catch (error) {
    console.log('正在安装axios依赖...');
    await execAsync('npm install axios');
    console.log('axios依赖安装完成');
  }
}

// 运行其他脚本
async function runScript(scriptPath) {
  console.log(`正在运行脚本: ${scriptPath}`);
  try {
    // 使用动态导入执行脚本
    await import(scriptPath);
    return true;
  } catch (error) {
    console.error(`执行脚本 ${scriptPath} 时出错:`, error);
    return false;
  }
}

// 主函数
async function main() {
  console.log('==== 图片修复工具 ====');
  
  // 确保依赖已安装
  await ensureDependencies();
  
  // 运行测试脚本
  const testScriptPath = path.join(__dirname, 'testImageAvailability.js');
  const testScriptUrl = new URL(`file://${testScriptPath}`).href;
  await runScript(testScriptUrl);
  
  // 运行修复脚本
  const fixScriptPath = path.join(__dirname, 'fixCitrusImages.js');
  const fixScriptUrl = new URL(`file://${fixScriptPath}`).href;
  await runScript(fixScriptUrl);
  
  console.log('所有图片修复脚本已执行完毕');
}

// 执行主函数
main().catch(error => {
  console.error('执行过程中出错:', error);
}); 