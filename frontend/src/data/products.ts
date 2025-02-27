import { Product } from '../types/product';

// 修改后的产品数据 - 更新了图片链接
export const products: Product[] = [
  {
    id: "1",
    name: "有机胡萝卜",
    category: "vegetables",
    price: 5.99,
    unit: "kg",
    description: "新鲜采摘的有机胡萝卜，富含胡萝卜素，适合生食或烹饪。",
    imageUrl: "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=400&h=300",
    stock: 100,
    origin: "山东省",
    harvestDate: "2024-02-25",
    nutritionFacts: {
      calories: 41,
      protein: 0.9,
      carbs: 9.6,
      fat: 0.2
    },
    isOrganic: true,
    rating: 4.8,
    reviews: 128
  },
  {
    id: "2",
    name: "红富士苹果",
    category: "fruits",
    price: 12.99,
    unit: "kg",
    description: "精选红富士苹果，果肉脆甜，口感极佳。",
    imageUrl: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=400&h=300",
    stock: 200,
    origin: "陕西省",
    harvestDate: "2024-02-20",
    nutritionFacts: {
      calories: 52,
      protein: 0.3,
      carbs: 14,
      fat: 0.2
    },
    isOrganic: false,
    rating: 4.9,
    reviews: 256
  },
  {
    id: "3",
    name: "东北大米",
    category: "grains",
    price: 39.99,
    unit: "10kg",
    description: "优质东北大米，颗粒饱满，煮出的米饭香糯可口。",
    imageUrl: "https://img.freepik.com/free-photo/raw-organic-white-jasmine-rice_114579-26545.jpg?w=400&h=300",
    stock: 50,
    origin: "黑龙江省",
    harvestDate: "2023-10-15",
    nutritionFacts: {
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3
    },
    isOrganic: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: "4",
    name: "新鲜西红柿",
    category: "vegetables",
    price: 7.99,
    unit: "kg",
    description: "新鲜多汁的西红柿，富含维生素，适合生食或烹饪。",
    imageUrl: "https://img.freepik.com/free-photo/tomatoes_144627-5341.jpg?w=400&h=300",
    stock: 150,
    origin: "云南省",
    harvestDate: "2024-02-22",
    nutritionFacts: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2
    },
    isOrganic: false,
    rating: 4.6,
    reviews: 104
  },
  {
    id: "5",
    name: "有机草莓",
    category: "fruits",
    price: 29.99,
    unit: "盒",
    description: "有机种植的草莓，香甜可口，含有丰富的维生素C。",
    imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=400&h=300",
    stock: 80,
    origin: "北京市",
    harvestDate: "2024-02-26",
    nutritionFacts: {
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fat: 0.3
    },
    isOrganic: true,
    rating: 4.9,
    reviews: 200
  },
  {
    id: "6",
    name: "生态猪肉",
    category: "meat",
    price: 59.99,
    unit: "kg",
    description: "生态养殖的猪肉，肉质鲜嫩，无添加剂，健康美味。",
    imageUrl: "https://img.freepik.com/free-photo/raw-pork-meat_1339-6278.jpg?w=400&h=300",
    stock: 30,
    origin: "四川省",
    harvestDate: "2024-02-24",
    nutritionFacts: {
      calories: 242,
      protein: 26,
      carbs: 0,
      fat: 14
    },
    isOrganic: false,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "7",
    name: "有机菠菜",
    category: "vegetables",
    price: 9.99,
    unit: "kg",
    description: "有机种植的菠菜，叶片翠绿，富含铁质和维生素。",
    imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=400&h=300",
    stock: 120,
    origin: "江苏省",
    harvestDate: "2024-02-25",
    nutritionFacts: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4
    },
    isOrganic: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: "8",
    name: "新鲜三文鱼",
    category: "seafood",
    price: 99.99,
    unit: "kg",
    description: "新鲜捕捞的三文鱼，肉质鲜美，富含欧米伽3脂肪酸。",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&h=300",
    stock: 25,
    origin: "挪威",
    harvestDate: "2024-02-25",
    nutritionFacts: {
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13
    },
    isOrganic: false,
    rating: 4.9,
    reviews: 176
  },
  {
    id: "9",
    name: "有机牛奶",
    category: "dairy",
    price: 18.99,
    unit: "升",
    description: "有机牧场生产的纯净牛奶，口感醇厚，营养丰富。",
    imageUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=400&h=300",
    stock: 100,
    origin: "内蒙古",
    harvestDate: "2024-02-26",
    nutritionFacts: {
      calories: 60,
      protein: 3.2,
      carbs: 4.8,
      fat: 3.2
    },
    isOrganic: true,
    rating: 4.8,
    reviews: 145
  }
]; 