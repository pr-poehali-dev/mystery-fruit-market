import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const MagicalFruitShop = () => {
  const fruits = [
    {
      id: 1,
      name: "Flame Fruit",
      emoji: "🔥",
      price: "2,500,000",
      rarity: "Legendary",
      description: "Unleashes fiery attacks upon foes",
      power: 95,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      name: "Lightning Fruit",
      emoji: "⚡",
      price: "3,000,000",
      rarity: "Mythical",
      description: "Control the power of thunder",
      power: 98,
      color: "from-blue-400 to-purple-600"
    },
    {
      id: 3,
      name: "Shadow Fruit",
      emoji: "🌑",
      price: "2,000,000",
      rarity: "Legendary",
      description: "Master the darkness itself",
      power: 92,
      color: "from-purple-800 to-black"
    },
    {
      id: 4,
      name: "Ice Fruit",
      emoji: "❄️",
      price: "1,800,000",
      rarity: "Epic",
      description: "Freeze enemies in their tracks",
      power: 88,
      color: "from-blue-300 to-cyan-500"
    },
    {
      id: 5,
      name: "Dragon Fruit",
      emoji: "🐲",
      price: "5,000,000",
      rarity: "Mythical",
      description: "Transform into a mighty dragon",
      power: 100,
      color: "from-gaming-orange to-gaming-purple"
    },
    {
      id: 6,
      name: "Phoenix Fruit",
      emoji: "🔥",
      price: "4,500,000",
      rarity: "Mythical",
      description: "Rise from ashes with healing powers",
      power: 97,
      color: "from-orange-400 to-red-600"
    }
  ];

  const playerStats = {
    level: 1247,
    bounty: "50,000,000",
    fruits: 12,
    berries: "15,750,000"
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Mythical': return 'bg-gradient-to-r from-gaming-purple to-gaming-pink text-white';
      case 'Legendary': return 'bg-gradient-to-r from-gaming-orange to-gaming-yellow text-black';
      case 'Epic': return 'bg-gradient-to-r from-gaming-cyan to-gaming-green text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-display">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-orange/20 to-gaming-purple/20 animate-pulse"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/img/e71b9519-ac14-4167-a6a0-95046e307342.jpg" 
                alt="Magical Fruit Shop" 
                className="w-24 h-24 rounded-full animate-magical-glow"
              />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gaming-orange to-gaming-purple bg-clip-text text-transparent mb-4 animate-float">
              🍎 MYSTERIOUS FRUIT SHOP 🍎
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Добро пожаловать в самый таинственный магазин фруктов в мире Blox Fruits! 
              Здесь ты найдешь легендарные фрукты с невероятными способностями.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-gaming-orange to-gaming-yellow text-black font-bold px-8 py-3 text-lg hover:scale-105 transition-transform">
                <Icon name="Sparkles" className="mr-2" />
                Начать Приключение
              </Button>
              <Button variant="outline" className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white px-8 py-3 text-lg">
                <Icon name="BookOpen" className="mr-2" />
                Гайд по Фруктам
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Player Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-gaming-purple/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gaming-yellow flex items-center justify-center gap-2">
              <Icon name="User" />
              Профиль Игрока
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-orange">{playerStats.level}</div>
                <div className="text-gray-400">Уровень</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-purple">💰 {playerStats.berries}</div>
                <div className="text-gray-400">Ягоды</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-cyan">{playerStats.bounty}</div>
                <div className="text-gray-400">Награда</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-green">{playerStats.fruits}</div>
                <div className="text-gray-400">Фрукты</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Опыт до следующего уровня</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fruit Catalog */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gaming-orange to-gaming-purple bg-clip-text text-transparent">
            🍇 КАТАЛОГ МАГИЧЕСКИХ ФРУКТОВ 🍇
          </h2>
          <p className="text-gray-300 text-lg">Выбери свою судьбу! Каждый фрукт дает уникальные способности.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fruits.map((fruit) => (
            <Card key={fruit.id} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group hover:shadow-2xl hover:shadow-gaming-purple/25">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">{fruit.emoji}</div>
                <CardTitle className="text-2xl font-bold text-gaming-yellow">{fruit.name}</CardTitle>
                <Badge className={`${getRarityColor(fruit.rarity)} text-sm font-bold`}>
                  {fruit.rarity}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-300 text-center">
                  {fruit.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Мощность</span>
                    <span className="font-bold text-gaming-orange">{fruit.power}/100</span>
                  </div>
                  <Progress value={fruit.power} className="h-2" />
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-gaming-green mb-2">
                    💰 {fruit.price}
                  </div>
                  <div className="text-gray-400 text-sm">Ягоды</div>
                </div>
                
                <div className="space-y-2">
                  <Button className={`w-full bg-gradient-to-r ${fruit.color} text-white font-bold hover:scale-105 transition-transform`}>
                    <Icon name="ShoppingCart" className="mr-2" />
                    Купить Фрукт
                  </Button>
                  <Button variant="outline" className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white">
                    <Icon name="Eye" className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-gaming-purple/20 to-gaming-orange/20 border-gaming-yellow/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gaming-yellow flex items-center justify-center gap-2">
              <Icon name="Zap" />
              ⚡ СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ ⚡
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-slate-800/50 rounded-lg">
                <div className="text-4xl mb-2">🎁</div>
                <h3 className="text-xl font-bold text-gaming-orange mb-2">Ежедневный Бонус</h3>
                <p className="text-gray-300">Получай бесплатные ягоды каждый день!</p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg">
                <div className="text-4xl mb-2">🔮</div>
                <h3 className="text-xl font-bold text-gaming-purple mb-2">Случайный Фрукт</h3>
                <p className="text-gray-300">Попробуй удачу с мистическим спином!</p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg">
                <div className="text-4xl mb-2">👑</div>
                <h3 className="text-xl font-bold text-gaming-cyan mb-2">VIP Доступ</h3>
                <p className="text-gray-300">Эксклюзивные фрукты для VIP игроков!</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-gaming-yellow to-gaming-orange text-black font-bold px-12 py-4 text-xl hover:scale-105 transition-transform animate-pulse">
              <Icon name="Star" className="mr-2" />
              Забрать Награды
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Button variant="ghost" className="text-gaming-purple hover:text-white">
              <Icon name="Home" className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="text-gaming-orange hover:text-white">
              <Icon name="Apple" className="mr-2" />
              Каталог
            </Button>
            <Button variant="ghost" className="text-gaming-cyan hover:text-white">
              <Icon name="User" className="mr-2" />
              Профиль
            </Button>
            <Button variant="ghost" className="text-gaming-green hover:text-white">
              <Icon name="HelpCircle" className="mr-2" />
              Помощь
            </Button>
          </div>
          <p className="text-gray-400">© 2024 Mysterious Fruit Shop. Все права защищены. 🍎✨</p>
        </div>
      </footer>
    </div>
  );
};

export default MagicalFruitShop;