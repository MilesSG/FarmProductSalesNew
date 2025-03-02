export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
  category: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  isOrganic: boolean;
  origin?: string;
  harvestDate?: string;
  expiryDate?: string;
  storage?: string;
  certification?: string[];
  nutritionInfo?: Array<{
    name: string;
    amount: string;
    dailyValue: string;
  }>;
  productReviews?: Array<{
    id: number;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    content: string;
  }>;
  additionalImages?: string[];
  relatedProducts?: number[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "有机胡萝卜",
    price: 5.99,
    unit: "kg",
    description: "新鲜采摘的有机胡萝卜，富含胡萝卜素，适合生食或烹饪使用。",
    category: "vegetables",
    imageUrl: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 128,
    isOrganic: true
  },
  {
    id: 2,
    name: "红富士苹果",
    price: 12.99,
    unit: "kg",
    description: "精选红富士苹果，果肉脆甜，口感极佳。",
    category: "fruits",
    imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 256,
    isOrganic: false
  },
  {
    id: 3,
    name: "东北大米",
    price: 39.99,
    unit: "10kg",
    description: "优质东北大米，颗粒饱满，煮出的米饭香糯可口。",
    category: "grains",
    imageUrl: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 89,
    isOrganic: false
  },
  {
    id: 4,
    name: "新鲜西红柿",
    price: 6.99,
    unit: "kg",
    description: "新鲜采摘的西红柿，口感酸甜，富含维生素C。",
    category: "vegetables",
    imageUrl: "https://images.unsplash.com/photo-1558818498-28c1e002b655?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviews: 75,
    isOrganic: false
  },
  {
    id: 5,
    name: "有机菠菜",
    price: 8.99,
    unit: "kg",
    description: "有机种植的菠菜，无农药残留，富含铁质和多种维生素。",
    category: "vegetables",
    imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 112,
    isOrganic: true
  },
  {
    id: 6,
    name: "精选猕猴桃",
    price: 15.99,
    unit: "kg",
    description: "精选猕猴桃，果肉鲜嫩，富含维生素C和膳食纤维。",
    category: "fruits",
    imageUrl: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 178,
    isOrganic: false
  },
  {
    id: 7,
    name: "有机黄瓜",
    price: 7.49,
    unit: "kg",
    description: "有机黄瓜，脆嫩多汁，适合生食或凉拌。",
    category: "vegetables",
    imageUrl: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviews: 93,
    isOrganic: true
  },
  {
    id: 8,
    name: "紫玉葡萄",
    price: 19.99,
    unit: "kg",
    description: "精选紫玉葡萄，果粒饱满，甜度高，入口即化。",
    category: "fruits",
    imageUrl: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 201,
    isOrganic: false
  },
  {
    id: 9,
    name: "五常香米",
    price: 49.99,
    unit: "5kg",
    description: "五常香米，有\"米中之王\"的美誉，米粒晶莹剔透，煮熟后飘香四溢。",
    category: "grains",
    imageUrl: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 156,
    isOrganic: false
  },
  {
    id: 10,
    name: "有机生菜",
    price: 6.99,
    unit: "kg",
    description: "有机生菜，叶片鲜嫩，适合制作沙拉或三明治。",
    category: "vegetables",
    imageUrl: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 87,
    isOrganic: true
  },
  {
    id: 11,
    name: "巴氏鲜奶",
    price: 9.99,
    unit: "L",
    description: "巴氏杀菌鲜奶，保留了牛奶的原味和营养，口感醇厚。",
    category: "dairy",
    imageUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 132,
    isOrganic: false
  },
  {
    id: 12,
    name: "精选草莓",
    price: 22.99,
    unit: "kg",
    description: "精选草莓，果肉鲜嫩，甜酸适口，富含维生素C。",
    category: "fruits",
    imageUrl: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 175,
    isOrganic: false
  },
  {
    id: 13,
    name: "鲜香平菇",
    price: 13.99,
    unit: "500g",
    description: "新鲜采摘的平菇，肉质肥厚，鲜香味美，适合炒食、炖汤，富含蛋白质和多种维生素。",
    category: "mushrooms",
    imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 92,
    isOrganic: false,
    storage: "阴凉干燥处保存，最好当天食用",
    nutritionInfo: [
      { name: "蛋白质", amount: "3.2g", dailyValue: "6%" },
      { name: "膳食纤维", amount: "2.5g", dailyValue: "10%" },
      { name: "钾", amount: "420mg", dailyValue: "12%" }
    ]
  },
  {
    id: 14,
    name: "有机香菇",
    price: 18.99,
    unit: "500g",
    description: "有机种植的香菇，菇盖肥厚，口感嫩滑，香气浓郁，可炒可炖，增添菜肴鲜香味。",
    category: "mushrooms",
    imageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 115,
    isOrganic: true,
    storage: "冷藏保存，3-5天内食用",
    certification: ["有机认证", "绿色食品"],
    nutritionInfo: [
      { name: "蛋白质", amount: "3.5g", dailyValue: "7%" },
      { name: "膳食纤维", amount: "2.8g", dailyValue: "11%" },
      { name: "钾", amount: "450mg", dailyValue: "13%" }
    ]
  },
  {
    id: 15,
    name: "金针菇",
    price: 8.99,
    unit: "250g",
    description: "新鲜金针菇，茎脆肉嫩，清香可口，富含多种氨基酸和微量元素，适合涮火锅、做汤或炒食。",
    category: "mushrooms",
    imageUrl: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 78,
    isOrganic: false,
    storage: "冷藏保存，2-3天内食用",
    nutritionInfo: [
      { name: "蛋白质", amount: "2.8g", dailyValue: "5%" },
      { name: "膳食纤维", amount: "2.2g", dailyValue: "9%" },
      { name: "铁", amount: "1.2mg", dailyValue: "7%" }
    ]
  },
  {
    id: 16,
    name: "松茸菌",
    price: 299.99,
    unit: "100g",
    description: "高山野生松茸，被誉为\"菌中之王\"，香气独特，口感鲜美，营养价值极高，适合清蒸、涮火锅。",
    category: "mushrooms",
    imageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    reviews: 36,
    isOrganic: true,
    origin: "云南",
    storage: "冷藏保存，建议当天食用",
    certification: ["绿色食品", "野生认证"],
    nutritionInfo: [
      { name: "蛋白质", amount: "4.5g", dailyValue: "9%" },
      { name: "膳食纤维", amount: "3.0g", dailyValue: "12%" },
      { name: "硒", amount: "12μg", dailyValue: "22%" }
    ]
  },
  {
    id: 17,
    name: "有机菠菜",
    price: 8.99,
    unit: "500g",
    description: "有机种植的菠菜，叶片翠绿肥厚，富含铁质和叶酸，是补铁的理想食材。",
    category: "leaf-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 89,
    isOrganic: true,
    storage: "冷藏保存，2-3天内食用",
    certification: ["有机认证"],
    nutritionInfo: [
      { name: "铁", amount: "2.7mg", dailyValue: "15%" },
      { name: "维生素A", amount: "469μg", dailyValue: "52%" },
      { name: "叶酸", amount: "194μg", dailyValue: "49%" }
    ]
  },
  {
    id: 18,
    name: "生菜",
    price: 5.99,
    unit: "500g",
    description: "新鲜生菜，叶片脆嫩多汁，口感清爽，富含膳食纤维，适合制作沙拉或三明治。",
    category: "leaf-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviews: 76,
    isOrganic: false,
    storage: "冷藏保存，3-5天内食用",
    nutritionInfo: [
      { name: "维生素K", amount: "126μg", dailyValue: "105%" },
      { name: "维生素A", amount: "148μg", dailyValue: "16%" },
      { name: "叶酸", amount: "38μg", dailyValue: "10%" }
    ]
  },
  {
    id: 19,
    name: "小白菜",
    price: 6.99,
    unit: "500g",
    description: "新鲜小白菜，叶嫩茎脆，口感清香，适合炒食或煮汤，是餐桌上的常见蔬菜。",
    category: "leaf-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 65,
    isOrganic: false,
    storage: "冷藏保存，2-3天内食用",
    nutritionInfo: [
      { name: "钙", amount: "105mg", dailyValue: "10%" },
      { name: "维生素C", amount: "45mg", dailyValue: "50%" },
      { name: "维生素K", amount: "138μg", dailyValue: "115%" }
    ]
  },
  {
    id: 20,
    name: "有机油麦菜",
    price: 9.99,
    unit: "500g",
    description: "有机种植的油麦菜，叶片翠绿，口感甘甜，富含维生素和矿物质，可生食凉拌或热炒。",
    category: "leaf-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 82,
    isOrganic: true,
    storage: "冷藏保存，2-3天内食用",
    certification: ["有机认证", "绿色食品"],
    nutritionInfo: [
      { name: "维生素A", amount: "318μg", dailyValue: "35%" },
      { name: "维生素C", amount: "35mg", dailyValue: "39%" },
      { name: "钾", amount: "268mg", dailyValue: "8%" }
    ]
  },
  {
    id: 21,
    name: "有机胡萝卜",
    price: 7.99,
    unit: "500g",
    description: "有机种植的胡萝卜，肉质脆嫩，甜度高，富含胡萝卜素，对眼睛健康有益。",
    category: "root-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 98,
    isOrganic: true,
    storage: "冷藏保存，可存放7-10天",
    certification: ["有机认证"],
    nutritionInfo: [
      { name: "维生素A", amount: "835μg", dailyValue: "93%" },
      { name: "维生素K", amount: "13μg", dailyValue: "11%" },
      { name: "钾", amount: "320mg", dailyValue: "9%" }
    ]
  },
  {
    id: 22,
    name: "红薯",
    price: 5.99,
    unit: "kg",
    description: "新鲜红薯，肉质细腻，香甜可口，富含膳食纤维和胡萝卜素，是健康的主食替代品。",
    category: "root-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 87,
    isOrganic: false,
    storage: "阴凉干燥处保存，可存放2-3周",
    nutritionInfo: [
      { name: "膳食纤维", amount: "3g", dailyValue: "12%" },
      { name: "维生素A", amount: "709μg", dailyValue: "79%" },
      { name: "维生素C", amount: "20mg", dailyValue: "22%" }
    ]
  },
  {
    id: 23,
    name: "土豆",
    price: 4.99,
    unit: "kg",
    description: "新鲜土豆，皮薄肉厚，口感绵软，富含淀粉和钾元素，是百搭的烹饪主料。",
    category: "root-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 102,
    isOrganic: false,
    storage: "阴凉干燥处保存，避光保存可延长保质期",
    nutritionInfo: [
      { name: "碳水化合物", amount: "17g", dailyValue: "6%" },
      { name: "维生素C", amount: "19.7mg", dailyValue: "22%" },
      { name: "钾", amount: "421mg", dailyValue: "12%" }
    ]
  },
  {
    id: 24,
    name: "山药",
    price: 12.99,
    unit: "kg",
    description: "新鲜山药，肉质细腻，口感粘滑，富含淀粉酶和多酚氧化酶，具有健脾养胃的功效。",
    category: "root-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1575116464504-9e7652fddcb3?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 76,
    isOrganic: false,
    storage: "冷藏保存，可存放7-10天",
    nutritionInfo: [
      { name: "膳食纤维", amount: "4g", dailyValue: "16%" },
      { name: "维生素C", amount: "6mg", dailyValue: "7%" },
      { name: "钾", amount: "816mg", dailyValue: "23%" }
    ]
  },
  {
    id: 25,
    name: "西红柿",
    price: 8.99,
    unit: "kg",
    description: "新鲜西红柿，肉质多汁，酸甜可口，富含番茄红素和维生素C，是健康的蔬果之选。",
    category: "fruit-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 94,
    isOrganic: false,
    storage: "室温下可保存3-5天，冷藏可延长保质期",
    nutritionInfo: [
      { name: "维生素C", amount: "14mg", dailyValue: "16%" },
      { name: "维生素A", amount: "42μg", dailyValue: "5%" },
      { name: "钾", amount: "237mg", dailyValue: "7%" }
    ]
  },
  {
    id: 26,
    name: "有机黄瓜",
    price: 9.99,
    unit: "kg",
    description: "有机种植的黄瓜，皮薄肉脆，水分充足，清香爽口，适合生食或凉拌。",
    category: "fruit-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 83,
    isOrganic: true,
    storage: "冷藏保存，可保存4-5天",
    certification: ["有机认证", "绿色食品"],
    nutritionInfo: [
      { name: "维生素K", amount: "16.4μg", dailyValue: "14%" },
      { name: "维生素C", amount: "2.8mg", dailyValue: "3%" },
      { name: "钾", amount: "147mg", dailyValue: "4%" }
    ]
  },
  {
    id: 27,
    name: "茄子",
    price: 6.99,
    unit: "kg",
    description: "新鲜茄子，肉质细嫩，口感绵软，适合炒、炖、煎、炸等多种烹饪方式。",
    category: "fruit-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 79,
    isOrganic: false,
    storage: "冷藏保存，可保存3-4天",
    nutritionInfo: [
      { name: "膳食纤维", amount: "3g", dailyValue: "12%" },
      { name: "钾", amount: "229mg", dailyValue: "7%" },
      { name: "锰", amount: "0.2mg", dailyValue: "10%" }
    ]
  },
  {
    id: 28,
    name: "彩椒套装",
    price: 15.99,
    unit: "500g",
    description: "红、黄、绿彩椒组合装，脆嫩多汁，香甜可口，富含维生素C和胡萝卜素，色彩鲜艳适合点缀菜肴。",
    category: "fruit-vegetables",
    imageUrl: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 91,
    isOrganic: false,
    storage: "冷藏保存，可保存5-7天",
    nutritionInfo: [
      { name: "维生素C", amount: "128mg", dailyValue: "142%" },
      { name: "维生素A", amount: "157μg", dailyValue: "17%" },
      { name: "维生素B6", amount: "0.3mg", dailyValue: "18%" }
    ]
  },
  {
    id: 29,
    name: "泰国芒果",
    price: 25.99,
    unit: "kg",
    description: "进口泰国芒果，果肉金黄细腻，香甜多汁，几乎无纤维，是热带水果的代表。",
    category: "tropical-fruits",
    imageUrl: "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 112,
    isOrganic: false,
    origin: "泰国",
    storage: "常温下可保存3-5天，未完全成熟可在室温下催熟",
    nutritionInfo: [
      { name: "维生素C", amount: "36mg", dailyValue: "40%" },
      { name: "维生素A", amount: "54μg", dailyValue: "6%" },
      { name: "叶酸", amount: "43μg", dailyValue: "11%" }
    ]
  },
  {
    id: 30,
    name: "菲律宾香蕉",
    price: 12.99,
    unit: "kg",
    description: "进口菲律宾香蕉，果肉香甜软糯，营养丰富，富含钾元素和维生素B6，是理想的快速能量来源。",
    category: "tropical-fruits",
    imageUrl: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 98,
    isOrganic: false,
    origin: "菲律宾",
    storage: "室温下可保存3-5天，冷藏会导致果皮变黑",
    nutritionInfo: [
      { name: "钾", amount: "358mg", dailyValue: "10%" },
      { name: "维生素B6", amount: "0.4mg", dailyValue: "24%" },
      { name: "维生素C", amount: "8.7mg", dailyValue: "10%" }
    ]
  },
  {
    id: 31,
    name: "越南火龙果",
    price: 18.99,
    unit: "kg",
    description: "进口越南火龙果，果肉雪白或红色，籽粒细小，口感清甜微酸，富含花青素和维生素C。",
    category: "tropical-fruits",
    imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 86,
    isOrganic: false,
    origin: "越南",
    storage: "冷藏保存，可保存5-7天",
    nutritionInfo: [
      { name: "维生素C", amount: "9mg", dailyValue: "10%" },
      { name: "铁", amount: "0.6mg", dailyValue: "3%" },
      { name: "膳食纤维", amount: "3g", dailyValue: "12%" }
    ]
  },
  {
    id: 32,
    name: "海南椰子",
    price: 15.99,
    unit: "个",
    description: "新鲜海南椰子，椰肉饱满，椰水清甜，富含中链脂肪酸和电解质，是夏日消暑的理想选择。",
    category: "tropical-fruits",
    imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 75,
    isOrganic: false,
    origin: "海南",
    storage: "室温下可保存7-10天",
    nutritionInfo: [
      { name: "脂肪", amount: "33g", dailyValue: "42%" },
      { name: "膳食纤维", amount: "9g", dailyValue: "36%" },
      { name: "锰", amount: "1.5mg", dailyValue: "75%" }
    ]
  },
  {
    id: 33,
    name: "有机蓝莓",
    price: 39.99,
    unit: "250g",
    description: "有机种植的蓝莓，个大饱满，口感酸甜，富含花青素和抗氧化物质，被誉为\"抗氧化之王\"。",
    category: "berries",
    imageUrl: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 123,
    isOrganic: true,
    storage: "冷藏保存，可保存5-7天",
    certification: ["有机认证", "绿色食品"],
    nutritionInfo: [
      { name: "维生素K", amount: "19.3μg", dailyValue: "16%" },
      { name: "维生素C", amount: "14.4mg", dailyValue: "16%" },
      { name: "锰", amount: "0.5mg", dailyValue: "25%" }
    ]
  },
  {
    id: 34,
    name: "新鲜草莓",
    price: 29.99,
    unit: "500g",
    description: "新鲜采摘的草莓，颗粒饱满红润，香甜多汁，富含维生素C和抗氧化物质。",
    category: "berries",
    imageUrl: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 108,
    isOrganic: false,
    storage: "冷藏保存，建议2-3天内食用",
    nutritionInfo: [
      { name: "维生素C", amount: "58.8mg", dailyValue: "65%" },
      { name: "锰", amount: "0.6mg", dailyValue: "30%" },
      { name: "叶酸", amount: "24μg", dailyValue: "6%" }
    ]
  },
  {
    id: 35,
    name: "黑莓",
    price: 35.99,
    unit: "250g",
    description: "精选黑莓，果实饱满黑亮，酸甜可口，富含维生素C和果胶，适合直接食用或制作果酱。",
    category: "berries",
    imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 89,
    isOrganic: false,
    storage: "冷藏保存，建议2-3天内食用",
    nutritionInfo: [
      { name: "维生素C", amount: "21mg", dailyValue: "23%" },
      { name: "维生素K", amount: "19.8μg", dailyValue: "17%" },
      { name: "锰", amount: "0.9mg", dailyValue: "45%" }
    ]
  },
  {
    id: 36,
    name: "覆盆子",
    price: 38.99,
    unit: "250g",
    description: "精选覆盆子，果实鲜红多汁，香甜微酸，富含花青素和维生素C，是高端水果的代表。",
    category: "berries",
    imageUrl: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 95,
    isOrganic: true,
    storage: "冷藏保存，建议1-2天内食用",
    certification: ["有机认证"],
    nutritionInfo: [
      { name: "维生素C", amount: "26.2mg", dailyValue: "29%" },
      { name: "锰", amount: "0.7mg", dailyValue: "35%" },
      { name: "膳食纤维", amount: "6.5g", dailyValue: "26%" }
    ]
  },
  {
    id: 37,
    name: "四川柑橘",
    price: 12.99,
    unit: "kg",
    description: "四川特产柑橘，果皮橙黄细腻，果肉多汁，甜中带酸，富含维生素C和类胡萝卜素。",
    category: "citrus",
    imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 82,
    isOrganic: false,
    origin: "四川",
    storage: "室温下可保存7-10天，冷藏可延长保质期",
    nutritionInfo: [
      { name: "维生素C", amount: "53.2mg", dailyValue: "59%" },
      { name: "叶酸", amount: "30μg", dailyValue: "8%" },
      { name: "钾", amount: "170mg", dailyValue: "5%" }
    ]
  },
  {
    id: 38,
    name: "福建蜜柚",
    price: 15.99,
    unit: "个",
    description: "福建平和蜜柚，果肉细嫩多汁，清甜爽口，微酸适中，富含维生素C和类黄酮。",
    category: "citrus",
    imageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 79,
    isOrganic: false,
    origin: "福建",
    storage: "室温下可保存10-15天，冷藏可保存更长时间",
    nutritionInfo: [
      { name: "维生素C", amount: "61.4mg", dailyValue: "68%" },
      { name: "钾", amount: "230mg", dailyValue: "7%" },
      { name: "膳食纤维", amount: "6.1g", dailyValue: "24%" }
    ]
  },
  {
    id: 39,
    name: "有机柠檬",
    price: 18.99,
    unit: "kg",
    description: "有机种植的柠檬，果皮光亮，果肉多汁，酸爽可口，富含维生素C和柠檬酸，适合烹饪调味或泡水饮用。",
    category: "citrus",
    imageUrl: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 91,
    isOrganic: true,
    storage: "室温下可保存7天，冷藏可保存2-3周",
    certification: ["有机认证", "绿色食品"],
    nutritionInfo: [
      { name: "维生素C", amount: "53mg", dailyValue: "59%" },
      { name: "叶酸", amount: "11μg", dailyValue: "3%" },
      { name: "钾", amount: "138mg", dailyValue: "4%" }
    ]
  },
  {
    id: 40,
    name: "血橙",
    price: 22.99,
    unit: "kg",
    description: "精选血橙，果肉呈血红色，汁多味甜，略带酸味，富含花青素和维生素C，是高端柑橘类水果。",
    category: "citrus",
    imageUrl: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 105,
    isOrganic: false,
    storage: "室温下可保存5-7天，冷藏可保存2周",
    nutritionInfo: [
      { name: "维生素C", amount: "80mg", dailyValue: "89%" },
      { name: "叶酸", amount: "40μg", dailyValue: "10%" },
      { name: "钾", amount: "237mg", dailyValue: "7%" }
    ]
  }
]; 