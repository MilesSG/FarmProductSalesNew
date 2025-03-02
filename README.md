# 🌟 鲜悦优选 - 农产品电商平台

一个现代化的农产品电子商务平台，提供优质有机和生态农产品。

## 🚀 项目概述

鲜悦优选是一个专注于新鲜、优质农产品销售的电子商务平台。我们致力于连接农民与消费者，提供从田间到餐桌的全程可追溯服务，确保每一位顾客都能享用到新鲜、健康的农产品。

## ✨ 主要功能

- 📊 **数据可视化**：销售趋势、分类统计和产品评分分析
- 🥕 **产品展示**：展示丰富的产品信息，包括产地、收获日期和营养成分
- 🛒 **购物车功能**：便捷的商品添加与管理
- 🏷️ **有机标签**：清晰标识有机产品
- 💫 **评分系统**：用户评价与评分展示
- 🖼️ **智能图片管理**：自动检测并修复失效图片链接

## 🔧 技术栈

### 前端技术
- **框架**：React + TypeScript
- **UI组件**：Ant Design
- **样式**：Tailwind CSS
- **数据可视化**：ECharts
- **构建工具**：Vite

### 后端技术
- **框架**：FastAPI
- **数据存储**：JSON文件（可扩展至数据库）
- **API文档**：Swagger UI (自动生成)

## 🛠️ 开发环境设置

### 前端
```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 检查图片可访问性
npm run test-images

# 修复柑橘类水果图片
npm run fix-images

# 扫描并修复所有图片
npm run scan-all-images
```

### 后端
```bash
# 进入后端目录
cd backend

# 创建并激活虚拟环境
python -m venv venv
source venv/bin/activate  # 在Windows上使用: venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 启动开发服务器
uvicorn main:app --reload
```

## 📝 项目结构

```
FarmProductSalesNew/
├── frontend/                # 前端React应用
│   ├── public/              # 静态资源
│   ├── src/                 # 源代码
│   │   ├── components/      # React组件
│   │   ├── data/            # 模拟数据
│   │   ├── types/           # TypeScript类型定义
│   │   └── utils/           # 工具函数
│   │       ├── imageChecker.js        # 图片检查工具
│   │       ├── fixCitrusImages.js     # 柑橘类图片修复
│   │       ├── scanAllImages.js       # 全项目图片扫描
│   │       └── testImageAvailability.js # 图片可用性测试
│   ├── package.json         # 依赖管理
│   └── vite.config.ts       # Vite配置
├── backend/                 # 后端FastAPI应用
│   ├── data/                # 数据文件
│   ├── main.py              # API入口
│   └── requirements.txt     # Python依赖
└── README.md                # 项目文档
```

## 🖼️ 图片管理系统

项目包含一套智能图片管理系统，用于确保所有产品和横幅图片能够正常显示：

### 特性
- **自动检测**：检测所有Unsplash图片URL的可访问性
- **智能替换**：根据图片上下文和用途选择合适的替代图片
- **分类处理**：为不同类别（水果、蔬菜、柑橘类、横幅等）提供专门的替代图片
- **全项目扫描**：支持扫描整个项目中的所有文件，找出并修复无效图片URL

### 使用方法
1. **测试特定图片**：`npm run test-images` - 测试预定义的重要图片URL
2. **修复柑橘类图片**：`npm run fix-images` - 专门针对柑橘类水果图片进行修复
3. **全项目图片扫描**：`npm run scan-all-images` - 扫描并修复整个项目中的所有图片

### 添加新图片时的建议格式
```
https://images.unsplash.com/photo-ID?auto=format&fit=crop&w=800&q=80  // 产品图片
https://images.unsplash.com/photo-ID?auto=format&fit=crop&w=1200&h=400&q=80  // 横幅图片
```

## 🌐 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 📋 待办事项

- [ ] 用户认证系统
- [ ] 真实支付集成
- [ ] 移动端App开发
- [ ] 多语言支持
- [x] 图片可用性检测与修复系统

