import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const MagicalFruitShop = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [isVip, setIsVip] = useState(false);
  const [purchasedFruits, setPurchasedFruits] = useState<number[]>([]);

  const texts = {
    ru: {
      title: "🍎 MYSTERIOUS FRUIT SHOP 🍎",
      subtitle: "Добро пожаловать в самый таинственный магазин фруктов в мире Blox Fruits! Здесь ты найдешь легендарные фрукты с невероятными способностями.",
      startAdventure: "Начать Приключение",
      fruitGuide: "Гайд по Фруктам",
      playerProfile: "Профиль Игрока",
      level: "Уровень",
      berries: "Ягоды",
      bounty: "Награда",
      fruits: "Фрукты",
      nextLevel: "Опыт до следующего уровня",
      fruitCatalog: "🍇 КАТАЛОГ МАГИЧЕСКИХ ФРУКТОВ 🍇",
      chooseFate: "Выбери свою судьбу! Каждый фрукт дает уникальные способности.",
      power: "Мощность",
      buyFruit: "Купить Фрукт",
      moreInfo: "Подробнее",
      specialOffers: "⚡ СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ ⚡",
      dailyBonus: "Ежедневный Бонус",
      dailyBonusDesc: "Получай бесплатные ягоды каждый день!",
      randomFruit: "Случайный Фрукт",
      randomFruitDesc: "Попробуй удачу с мистическим спином!",
      vipAccess: "VIP Доступ",
      vipAccessDesc: "Эксклюзивные фрукты для VIP игроков!",
      getRewards: "Забрать Награды",
      home: "Главная",
      catalog: "Каталог",
      profile: "Профиль",
      help: "Помощь",
      settings: "Настройки",
      language: "Язык",
      vipOffer: "💎 VIP ПРЕДЛОЖЕНИЕ",
      vipPrice: "Всего за 499₽",
      becomeVip: "Стать VIP",
      vipBenefits: "VIP Привилегии:",
      vipBenefit1: "Доступ к эксклюзивным фруктам",
      vipBenefit2: "Скидки 50% на все покупки",
      vipBenefit3: "Ежедневные бонусы x3",
      vipBenefit4: "Приоритетная поддержка"
    },
    en: {
      title: "🍎 MYSTERIOUS FRUIT SHOP 🍎",
      subtitle: "Welcome to the most mysterious fruit shop in the Blox Fruits world! Here you'll find legendary fruits with incredible abilities.",
      startAdventure: "Start Adventure",
      fruitGuide: "Fruit Guide",
      playerProfile: "Player Profile",
      level: "Level",
      berries: "Berries",
      bounty: "Bounty",
      fruits: "Fruits",
      nextLevel: "XP to next level",
      fruitCatalog: "🍇 MAGICAL FRUITS CATALOG 🍇",
      chooseFate: "Choose your fate! Each fruit grants unique abilities.",
      power: "Power",
      buyFruit: "Buy Fruit",
      moreInfo: "More Info",
      specialOffers: "⚡ SPECIAL OFFERS ⚡",
      dailyBonus: "Daily Bonus",
      dailyBonusDesc: "Get free berries every day!",
      randomFruit: "Random Fruit",
      randomFruitDesc: "Try your luck with mystical spin!",
      vipAccess: "VIP Access",
      vipAccessDesc: "Exclusive fruits for VIP players!",
      getRewards: "Get Rewards",
      home: "Home",
      catalog: "Catalog",
      profile: "Profile",
      help: "Help",
      settings: "Settings",
      language: "Language",
      vipOffer: "💎 VIP OFFER",
      vipPrice: "Only ₽499",
      becomeVip: "Become VIP",
      vipBenefits: "VIP Benefits:",
      vipBenefit1: "Access to exclusive fruits",
      vipBenefit2: "50% discount on all purchases",
      vipBenefit3: "Daily bonuses x3",
      vipBenefit4: "Priority support"
    }
  };

  const t = texts[language];

  const fruits = [
    {
      id: 1,
      name: "Flame Fruit",
      emoji: "🔥",
      price: "2,500,000",
      rarity: "Legendary",
      description: "Unleashes fiery attacks upon foes",
      power: 95,
      color: "from-red-500 to-orange-500",
      vipOnly: false
    },
    {
      id: 2,
      name: "Lightning Fruit",
      emoji: "⚡",
      price: "3,000,000",
      rarity: "Mythical",
      description: "Control the power of thunder",
      power: 98,
      color: "from-blue-400 to-purple-600",
      vipOnly: false
    },
    {
      id: 3,
      name: "Shadow Fruit",
      emoji: "🌑",
      price: "2,000,000",
      rarity: "Legendary",
      description: "Master the darkness itself",
      power: 92,
      color: "from-purple-800 to-black",
      vipOnly: false
    },
    {
      id: 4,
      name: "Ice Fruit",
      emoji: "❄️",
      price: "1,800,000",
      rarity: "Epic",
      description: "Freeze enemies in their tracks",
      power: 88,
      color: "from-blue-300 to-cyan-500",
      vipOnly: false
    },
    {
      id: 5,
      name: "Dragon Fruit",
      emoji: "🐲",
      price: "5,000,000",
      rarity: "Mythical",
      description: "Transform into a mighty dragon",
      power: 100,
      color: "from-gaming-orange to-gaming-purple",
      vipOnly: false
    },
    {
      id: 6,
      name: "Phoenix Fruit",
      emoji: "🔥",
      price: "4,500,000",
      rarity: "Mythical",
      description: "Rise from ashes with healing powers",
      power: 97,
      color: "from-orange-400 to-red-600",
      vipOnly: false
    },
    // VIP Exclusive Fruits
    {
      id: 7,
      name: "Cosmic Fruit",
      emoji: "🌌",
      price: "10,000,000",
      rarity: "Divine",
      description: "Control the power of galaxies",
      power: 105,
      color: "from-purple-600 to-indigo-900",
      vipOnly: true
    },
    {
      id: 8,
      name: "Time Fruit",
      emoji: "⏰",
      price: "8,000,000",
      rarity: "Divine",
      description: "Manipulate time and space",
      power: 103,
      color: "from-yellow-400 to-purple-700",
      vipOnly: true
    },
    {
      id: 9,
      name: "Soul Fruit",
      emoji: "👻",
      price: "7,500,000",
      rarity: "Divine",
      description: "Command souls of the underworld",
      power: 102,
      color: "from-gray-700 to-purple-800",
      vipOnly: true
    }
  ];

  const playerStats = {
    level: 1247,
    bounty: "50,000,000",
    fruits: purchasedFruits.length,
    berries: "15,750,000"
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Divine': return 'bg-gradient-to-r from-yellow-400 to-purple-600 text-black animate-pulse';
      case 'Mythical': return 'bg-gradient-to-r from-gaming-purple to-gaming-pink text-white';
      case 'Legendary': return 'bg-gradient-to-r from-gaming-orange to-gaming-yellow text-black';
      case 'Epic': return 'bg-gradient-to-r from-gaming-cyan to-gaming-green text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handlePurchaseFruit = (fruitId: number) => {
    if (!purchasedFruits.includes(fruitId)) {
      setPurchasedFruits([...purchasedFruits, fruitId]);
    }
  };

  const handleBecomeVip = () => {
    setIsVip(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-display relative">
      {/* Settings Button */}
      <div className="fixed top-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-slate-800/80 border-gaming-purple/50 backdrop-blur-sm hover:bg-gaming-purple/20 hover:scale-110 transition-all duration-300"
            >
              <Icon name="Settings" className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-slate-800/95 border-gaming-purple/30 backdrop-blur-md">
            <div className="p-2">
              <div className="mb-2 text-sm font-medium text-gaming-yellow">{t.settings}</div>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">{t.language}:</div>
                <Select value={language} onValueChange={(value: 'ru' | 'en') => setLanguage(value)}>
                  <SelectTrigger className="bg-slate-700 border-slate-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="ru">🇷🇺 Русский</SelectItem>
                    <SelectItem value="en">🇺🇸 English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* VIP Status Badge */}
      {isVip && (
        <div className="fixed top-4 left-4 z-50">
          <Badge className="bg-gradient-to-r from-yellow-400 to-purple-600 text-black font-bold animate-pulse px-4 py-2">
            👑 VIP MEMBER
          </Badge>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-orange/20 to-gaming-purple/20 animate-pulse"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/img/e71b9519-ac14-4167-a6a0-95046e307342.jpg" 
                alt="Magical Fruit Shop" 
                className="w-24 h-24 rounded-full animate-magical-glow hover:scale-125 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gaming-orange to-gaming-purple bg-clip-text text-transparent mb-4 animate-float">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-gaming-orange to-gaming-yellow text-black font-bold px-8 py-3 text-lg hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-gaming-orange/50">
                <Icon name="Sparkles" className="mr-2" />
                {t.startAdventure}
              </Button>
              <Button variant="outline" className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300">
                <Icon name="BookOpen" className="mr-2" />
                {t.fruitGuide}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* VIP Offer Section - Only show if not VIP */}
      {!isVip && (
        <div className="container mx-auto px-4 py-8">
          <Card className="bg-gradient-to-r from-yellow-400/20 to-purple-600/20 border-yellow-400/50 backdrop-blur-sm animate-pulse">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-2">
                <Icon name="Crown" />
                {t.vipOffer}
              </CardTitle>
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text">
                {t.vipPrice}
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gaming-yellow">{t.vipBenefits}</h4>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-400" />
                      <span>{t.vipBenefit1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-400" />
                      <span>{t.vipBenefit2}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-400" />
                      <span>{t.vipBenefit3}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-400" />
                      <span>{t.vipBenefit4}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button 
                    onClick={handleBecomeVip}
                    className="bg-gradient-to-r from-yellow-400 to-purple-600 text-black font-bold px-12 py-6 text-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/50"
                  >
                    <Icon name="Crown" className="mr-2" />
                    {t.becomeVip}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Player Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-gaming-purple/30 backdrop-blur-sm hover:scale-105 transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gaming-yellow flex items-center justify-center gap-2">
              <Icon name="User" />
              {t.playerProfile}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="text-3xl font-bold text-gaming-orange group-hover:scale-110 transition-transform duration-300">{playerStats.level}</div>
                <div className="text-gray-400">{t.level}</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gaming-purple group-hover:scale-110 transition-transform duration-300">💰 {playerStats.berries}</div>
                <div className="text-gray-400">{t.berries}</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gaming-cyan group-hover:scale-110 transition-transform duration-300">{playerStats.bounty}</div>
                <div className="text-gray-400">{t.bounty}</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gaming-green group-hover:scale-110 transition-transform duration-300">{playerStats.fruits}</div>
                <div className="text-gray-400">{t.fruits}</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>{t.nextLevel}</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-3 hover:h-4 transition-all duration-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fruit Catalog */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gaming-orange to-gaming-purple bg-clip-text text-transparent animate-bounce">
            {t.fruitCatalog}
          </h2>
          <p className="text-gray-300 text-lg">{t.chooseFate}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fruits.filter(fruit => !fruit.vipOnly || isVip).map((fruit) => (
            <Card key={fruit.id} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:scale-110 transition-all duration-500 group hover:shadow-2xl hover:shadow-gaming-purple/25 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-spin group-hover:scale-125 transition-all duration-500 cursor-pointer">{fruit.emoji}</div>
                <CardTitle className="text-2xl font-bold text-gaming-yellow group-hover:text-gaming-orange transition-colors duration-300">{fruit.name}</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className={`${getRarityColor(fruit.rarity)} text-sm font-bold`}>
                    {fruit.rarity}
                  </Badge>
                  {fruit.vipOnly && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-purple-600 text-black animate-pulse">
                      👑 VIP
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-300 text-center group-hover:text-white transition-colors duration-300">
                  {fruit.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t.power}</span>
                    <span className="font-bold text-gaming-orange">{fruit.power}/100</span>
                  </div>
                  <Progress value={fruit.power} className="h-2 group-hover:h-3 transition-all duration-300" />
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-gaming-green mb-2 group-hover:scale-110 transition-transform duration-300">
                    💰 {isVip && !fruit.vipOnly ? Math.floor(parseInt(fruit.price.replace(/,/g, '')) * 0.5).toLocaleString() : fruit.price}
                  </div>
                  <div className="text-gray-400 text-sm">{t.berries}</div>
                  {isVip && !fruit.vipOnly && (
                    <Badge className="bg-green-500/20 text-green-400 text-xs mt-1">50% VIP Скидка</Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => handlePurchaseFruit(fruit.id)}
                        className={`w-full bg-gradient-to-r ${fruit.color} text-white font-bold hover:scale-110 transition-all duration-300 hover:shadow-xl relative overflow-hidden group`}
                        disabled={purchasedFruits.includes(fruit.id)}
                      >
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <Icon name="ShoppingCart" className="mr-2 relative z-10" />
                        <span className="relative z-10">
                          {purchasedFruits.includes(fruit.id) ? '✅ Куплен' : t.buyFruit}
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 border-gaming-purple/50">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-gaming-yellow flex items-center gap-2">
                          <span className="text-4xl">{fruit.emoji}</span>
                          {fruit.name}
                        </DialogTitle>
                        <DialogDescription className="text-gray-300 text-lg">
                          {fruit.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-400">Редкость</div>
                            <Badge className={getRarityColor(fruit.rarity)}>{fruit.rarity}</Badge>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Мощность</div>
                            <div className="text-2xl font-bold text-gaming-orange">{fruit.power}/100</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gaming-green">
                            💰 {isVip && !fruit.vipOnly ? Math.floor(parseInt(fruit.price.replace(/,/g, '')) * 0.5).toLocaleString() : fruit.price}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white hover:scale-105 transition-all duration-300">
                    <Icon name="Eye" className="mr-2" />
                    {t.moreInfo}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-gaming-purple/20 to-gaming-orange/20 border-gaming-yellow/50 backdrop-blur-sm hover:scale-105 transition-all duration-500">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gaming-yellow flex items-center justify-center gap-2">
              <Icon name="Zap" className="animate-bounce" />
              {t.specialOffers}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-slate-800/50 rounded-lg hover:scale-105 transition-all duration-300 hover:bg-slate-700/50">
                <div className="text-4xl mb-2 animate-bounce">🎁</div>
                <h3 className="text-xl font-bold text-gaming-orange mb-2">{t.dailyBonus}</h3>
                <p className="text-gray-300">{t.dailyBonusDesc}</p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg hover:scale-105 transition-all duration-300 hover:bg-slate-700/50">
                <div className="text-4xl mb-2 animate-spin">🔮</div>
                <h3 className="text-xl font-bold text-gaming-purple mb-2">{t.randomFruit}</h3>
                <p className="text-gray-300">{t.randomFruitDesc}</p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg hover:scale-105 transition-all duration-300 hover:bg-slate-700/50">
                <div className="text-4xl mb-2 animate-pulse">👑</div>
                <h3 className="text-xl font-bold text-gaming-cyan mb-2">{t.vipAccess}</h3>
                <p className="text-gray-300">{t.vipAccessDesc}</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-gaming-yellow to-gaming-orange text-black font-bold px-12 py-4 text-xl hover:scale-110 transition-all duration-300 animate-pulse hover:shadow-2xl hover:shadow-gaming-yellow/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 transform rotate-12 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <Icon name="Star" className="mr-2 relative z-10 animate-spin" />
              <span className="relative z-10">{t.getRewards}</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Button variant="ghost" className="text-gaming-purple hover:text-white hover:scale-110 transition-all duration-300">
              <Icon name="Home" className="mr-2" />
              {t.home}
            </Button>
            <Button variant="ghost" className="text-gaming-orange hover:text-white hover:scale-110 transition-all duration-300">
              <Icon name="Apple" className="mr-2" />
              {t.catalog}
            </Button>
            <Button variant="ghost" className="text-gaming-cyan hover:text-white hover:scale-110 transition-all duration-300">
              <Icon name="User" className="mr-2" />
              {t.profile}
            </Button>
            <Button variant="ghost" className="text-gaming-green hover:text-white hover:scale-110 transition-all duration-300">
              <Icon name="HelpCircle" className="mr-2" />
              {t.help}
            </Button>
          </div>
          <p className="text-gray-400 hover:text-gaming-purple transition-colors duration-300">© 2024 Mysterious Fruit Shop. Все права защищены. 🍎✨</p>
        </div>
      </footer>
    </div>
  );
};

export default MagicalFruitShop;