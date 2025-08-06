import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState, useRef, useEffect } from "react";

const BloxFruitsStock = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [isVip, setIsVip] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      user: "TradeMaster",
      message: "WTS Dragon Fruit for Shadow + adds",
      timestamp: "2 мин назад",
      isVip: true
    },
    {
      id: 2,
      user: "FruitHunter",
      message: "LF Phoenix Fruit, have Flame + Ice",
      timestamp: "5 мин назад",
      isVip: false
    },
    {
      id: 3,
      user: "ProTrader",
      message: "Selling Lightning Fruit best offers",
      timestamp: "8 мин назад",
      isVip: true
    },
    {
      id: 4,
      user: "Newbie2024",
      message: "Anyone have spare Common fruits?",
      timestamp: "12 мин назад",
      isVip: false
    }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const texts = {
    ru: {
      title: "🍎 BLOX FRUITS STOCK 🍎",
      subtitle: "Текущий сток фруктов продавца. Здесь ты можешь посмотреть какие фрукты сейчас в наличии и торговать с другими игроками!",
      currentStock: "🍇 ТЕКУЩИЙ СТОК ФРУКТОВ 🍇",
      stockDescription: "Обновляется каждый час. Успей купить редкие фрукты!",
      tradeChat: "💬 ЧАТ ТРЕЙДИНГА",
      chatPlaceholder: "Напиши сообщение для трейда...",
      send: "Отправить",
      online: "Онлайн игроков:",
      settings: "Настройки",
      language: "Язык",
      vipOffer: "💎 VIP СТАТУС",
      vipPrice: "Всего за 99₽",
      becomeVip: "Стать VIP",
      vipBenefits: "VIP Привилегии:",
      vipBenefit1: "Золотой ник в чате",
      vipBenefit2: "Приоритет в сообщениях",
      vipBenefit3: "Эксклюзивный значок",
      vipBenefit4: "Уведомления о новых фруктах",
      inStock: "В наличии",
      outOfStock: "Нет в наличии",
      price: "Цена",
      quantity: "Количество"
    },
    en: {
      title: "🍎 BLOX FRUITS STOCK 🍎",
      subtitle: "Current fruit dealer stock. Here you can see which fruits are available now and trade with other players!",
      currentStock: "🍇 CURRENT FRUIT STOCK 🍇",
      stockDescription: "Updates every hour. Hurry to buy rare fruits!",
      tradeChat: "💬 TRADING CHAT",
      chatPlaceholder: "Write a trading message...",
      send: "Send",
      online: "Players online:",
      settings: "Settings",
      language: "Language",
      vipOffer: "💎 VIP STATUS",
      vipPrice: "Only ₽99",
      becomeVip: "Become VIP",
      vipBenefits: "VIP Benefits:",
      vipBenefit1: "Golden nickname in chat",
      vipBenefit2: "Message priority",
      vipBenefit3: "Exclusive badge",
      vipBenefit4: "New fruit notifications",
      inStock: "In Stock",
      outOfStock: "Out of Stock",
      price: "Price",
      quantity: "Quantity"
    }
  };

  const t = texts[language];

  const fruitStock = [
    {
      id: 1,
      name: "Dragon Fruit",
      emoji: "🐲",
      price: "3,500,000",
      rarity: "Mythical",
      inStock: true,
      quantity: 2,
      color: "from-gaming-orange to-gaming-purple"
    },
    {
      id: 2,
      name: "Phoenix Fruit",
      emoji: "🔥",
      price: "1,800,000",
      rarity: "Legendary",
      inStock: true,
      quantity: 1,
      color: "from-orange-400 to-red-600"
    },
    {
      id: 3,
      name: "Lightning Fruit",
      emoji: "⚡",
      price: "3,000,000",
      rarity: "Mythical",
      inStock: false,
      quantity: 0,
      color: "from-blue-400 to-purple-600"
    },
    {
      id: 4,
      name: "Shadow Fruit",
      emoji: "🌑",
      price: "2,900,000",
      rarity: "Legendary",
      inStock: true,
      quantity: 3,
      color: "from-purple-800 to-black"
    },
    {
      id: 5,
      name: "Ice Fruit",
      emoji: "❄️",
      price: "350,000",
      rarity: "Rare",
      inStock: true,
      quantity: 5,
      color: "from-blue-300 to-cyan-500"
    },
    {
      id: 6,
      name: "Flame Fruit",
      emoji: "🔥",
      price: "250,000",
      rarity: "Rare",
      inStock: false,
      quantity: 0,
      color: "from-red-500 to-orange-500"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Mythical': return 'bg-gradient-to-r from-gaming-purple to-gaming-pink text-white';
      case 'Legendary': return 'bg-gradient-to-r from-gaming-orange to-gaming-yellow text-black';
      case 'Rare': return 'bg-gradient-to-r from-gaming-cyan to-gaming-green text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        user: isVip ? "VIPTrader" : "Player" + Math.floor(Math.random() * 1000),
        message: chatMessage,
        timestamp: "Сейчас",
        isVip: isVip
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatMessage('');
    }
  };

  const handleBecomeVip = () => {
    setIsVip(true);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-display">
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
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gaming-orange to-gaming-purple bg-clip-text text-transparent mb-4 animate-float">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-green-500/20 text-green-400 px-4 py-2">
                <Icon name="Users" className="mr-2 h-4 w-4" />
                {t.online} 1,247
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 px-4 py-2">
                <Icon name="Clock" className="mr-2 h-4 w-4" />
                Обновлено: 15:42
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fruit Stock Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* VIP Offer Section - Only show if not VIP */}
            {!isVip && (
              <Card className="bg-gradient-to-r from-yellow-400/20 to-purple-600/20 border-yellow-400/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center justify-center gap-2">
                    <Icon name="Crown" />
                    {t.vipOffer}
                  </CardTitle>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text">
                    {t.vipPrice}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-400" />
                        <span className="text-sm">{t.vipBenefit1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-400" />
                        <span className="text-sm">{t.vipBenefit2}</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-400" />
                        <span className="text-sm">{t.vipBenefit3}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-400" />
                        <span className="text-sm">{t.vipBenefit4}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={handleBecomeVip}
                    className="bg-gradient-to-r from-yellow-400 to-purple-600 text-black font-bold px-8 py-3 text-lg hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Crown" className="mr-2" />
                    {t.becomeVip}
                  </Button>
                </CardContent>
              </Card>
            )}

            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gaming-orange to-gaming-purple bg-clip-text text-transparent">
                {t.currentStock}
              </h2>
              <p className="text-gray-300 text-lg">{t.stockDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fruitStock.map((fruit) => (
                <Card key={fruit.id} className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${!fruit.inStock ? 'opacity-60 grayscale' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="text-5xl mb-3">{fruit.emoji}</div>
                    <CardTitle className="text-xl font-bold text-gaming-yellow">{fruit.name}</CardTitle>
                    <Badge className={getRarityColor(fruit.rarity)}>
                      {fruit.rarity}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gaming-green mb-1">
                        💰 {fruit.price}
                      </div>
                      <div className="text-gray-400 text-sm">Ягоды</div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{t.quantity}:</span>
                      <Badge className={fruit.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                        {fruit.quantity} шт
                      </Badge>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={fruit.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                        {fruit.inStock ? t.inStock : t.outOfStock}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trading Chat Section */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-gaming-purple/30 h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gaming-yellow flex items-center gap-2">
                  <Icon name="MessageSquare" />
                  {t.tradeChat}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-4">
                <ScrollArea className="flex-1 mb-4 pr-4">
                  <div className="space-y-3">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                        <div className="flex items-start gap-2">
                          <div className="flex items-center gap-2 flex-1">
                            <span className={`font-bold text-sm ${msg.isVip ? 'text-yellow-400' : 'text-gaming-cyan'}`}>
                              {msg.isVip && '👑'} {msg.user}
                              {msg.isVip && (
                                <Badge className="ml-1 bg-gradient-to-r from-yellow-400 to-purple-600 text-black text-xs px-2 py-0">
                                  VIP
                                </Badge>
                              )}
                            </span>
                            <span className="text-xs text-gray-400">{msg.timestamp}</span>
                          </div>
                        </div>
                        <div className="mt-1 text-white text-sm">{msg.message}</div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                </ScrollArea>
                <div className="flex gap-2">
                  <Input
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder={t.chatPlaceholder}
                    className="flex-1 bg-slate-700 border-slate-600 text-white"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-gaming-orange to-gaming-purple hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Send" className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Blox Fruits Stock Tracker. Все права защищены. 🍎✨</p>
        </div>
      </footer>
    </div>
  );
};

export default BloxFruitsStock;