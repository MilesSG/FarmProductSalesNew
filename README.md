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
│   │   └── types/           # TypeScript类型定义
│   ├── package.json         # 依赖管理
│   └── vite.config.ts       # Vite配置
├── backend/                 # 后端FastAPI应用
│   ├── data/                # 数据文件
│   ├── main.py              # API入口
│   └── requirements.txt     # Python依赖
└── README.md                # 项目文档
```

## 🌐 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 👥 团队成员

- 张三 - 前端开发
- 李四 - 后端开发
- 王五 - UI/UX设计

## 📄 许可证

MIT License

## 🙏 鸣谢

感谢所有为本项目做出贡献的开发者和使用者。 