from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path
from typing import List, Dict, Any

app = FastAPI()

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React 开发服务器的默认端口
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 确保数据目录存在
data_dir = Path("data")
data_dir.mkdir(exist_ok=True)

# 产品数据文件路径
products_file = data_dir / "products.json"

# 初始化产品数据
if not products_file.exists():
    initial_products = [
        {
            "id": "1",
            "name": "有机胡萝卜",
            "category": "vegetables",
            "price": 5.99,
            "unit": "kg",
            "description": "新鲜采摘的有机胡萝卜，富含胡萝卜素，适合生食或烹饪。",
            "imageUrl": "https://picsum.photos/400/300?random=1",
            "stock": 100,
            "origin": "山东省",
            "harvestDate": "2024-02-25",
            "nutritionFacts": {
                "calories": 41,
                "protein": 0.9,
                "carbs": 9.6,
                "fat": 0.2
            },
            "isOrganic": True,
            "rating": 4.8,
            "reviews": 128
        },
        {
            "id": "2",
            "name": "红富士苹果",
            "category": "fruits",
            "price": 12.99,
            "unit": "kg",
            "description": "精选红富士苹果，果肉脆甜，口感极佳。",
            "imageUrl": "https://picsum.photos/400/300?random=2",
            "stock": 200,
            "origin": "陕西省",
            "harvestDate": "2024-02-20",
            "nutritionFacts": {
                "calories": 52,
                "protein": 0.3,
                "carbs": 14,
                "fat": 0.2
            },
            "isOrganic": False,
            "rating": 4.9,
            "reviews": 256
        },
        {
            "id": "3",
            "name": "东北大米",
            "category": "grains",
            "price": 39.99,
            "unit": "10kg",
            "description": "优质东北大米，颗粒饱满，煮出的米饭香糯可口。",
            "imageUrl": "https://picsum.photos/400/300?random=3",
            "stock": 50,
            "origin": "黑龙江省",
            "harvestDate": "2023-10-15",
            "nutritionFacts": {
                "calories": 130,
                "protein": 2.7,
                "carbs": 28,
                "fat": 0.3
            },
            "isOrganic": False,
            "rating": 4.7,
            "reviews": 89
        }
    ]
    products_file.write_text(json.dumps(initial_products, ensure_ascii=False, indent=2))

@app.get("/")
async def read_root():
    return {"message": "Welcome to Farm Products API"}

@app.get("/api/products")
async def get_products():
    products = json.loads(products_file.read_text())
    return products

@app.get("/api/products/{product_id}")
async def get_product(product_id: str):
    products = json.loads(products_file.read_text())
    for product in products:
        if product["id"] == product_id:
            return product
    return {"error": "Product not found"}

@app.get("/api/categories")
async def get_categories() -> List[Dict[str, Any]]:
    """获取所有产品分类"""
    products = json.loads(products_file.read_text())
    categories = {}
    
    for product in products:
        category = product.get("category")
        if category:
            if category not in categories:
                categories[category] = {
                    "id": category,
                    "name": get_category_name(category),
                    "count": 1
                }
            else:
                categories[category]["count"] += 1
    
    return list(categories.values())

def get_category_name(category_id: str) -> str:
    """获取分类的中文名称"""
    category_names = {
        "vegetables": "蔬菜",
        "fruits": "水果",
        "grains": "谷物",
        "dairy": "乳制品",
        "meat": "肉类",
        "seafood": "海鲜",
        "herbs": "草药"
    }
    return category_names.get(category_id, category_id) 