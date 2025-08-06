import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState, useRef, useEffect } from "react";

const BloxFruitsStock = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [isVip, setIsVip] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [lastStockUpdate, setLastStockUpdate] = useState(new Date().toLocaleTimeString());
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
    }
  ]);

  const [fruitStock, setFruitStock] = useState([
    {
      id: 1,
      name: "Dragon Fruit",
      emoji: "🐲",
      price: "3,500,000",
      rarity: "Mythical",
      inStock: true,
      quantity: 2,
      color: "from-gaming-orange to-gaming-purple",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 2,
      name: "Phoenix Fruit",
      emoji: "🔥",
      price: "1,800,000", 
      rarity: "Legendary",
      inStock: true,
      quantity: 1,
      color: "from-orange-400 to-red-600",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 3,
      name: "Leopard Fruit",
      emoji: "🐆",
      price: "5,000,000",
      rarity: "Mythical",
      inStock: false,
      quantity: 0,
      color: "from-yellow-400 to-orange-600",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 4,
      name: "Venom Fruit",
      emoji: "☠️",
      price: "3,000,000",
      rarity: "Mythical",
      inStock: true,
      quantity: 1,
      color: "from-purple-600 to-green-500",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 5,
      name: "Dough Fruit",
      emoji: "🍞",
      price: "2,800,000",
      rarity: "Mythical",
      inStock: true,
      quantity: 2,
      color: "from-pink-400 to-purple-500",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 6,
      name: "Shadow Fruit",
      emoji: "🌑",
      price: "2,900,000",
      rarity: "Legendary",
      inStock: true,
      quantity: 3,
      color: "from-purple-800 to-black",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 7,
      name: "Control Fruit",
      emoji: "🎭",
      price: "3,200,000",
      rarity: "Mythical",
      inStock: false,
      quantity: 0,
      color: "from-blue-500 to-purple-600",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 8,
      name: "Soul Fruit",
      emoji: "👻",
      price: "3,400,000",
      rarity: "Mythical",
      inStock: true,
      quantity: 1,
      color: "from-gray-600 to-purple-700",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 9,
      name: "Blizzard Fruit",
      emoji: "❄️",
      price: "2,400,000",
      rarity: "Legendary",
      inStock: true,
      quantity: 2,
      color: "from-blue-300 to-cyan-500",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 10,
      name: "Rumble Fruit",
      emoji: "⚡",
      price: "2,100,000",
      rarity: "Legendary",
      inStock: false,
      quantity: 0,
      color: "from-blue-400 to-purple-600",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 11,
      name: "Pain Fruit",
      emoji: "💀",
      price: "2,300,000",
      rarity: "Legendary", 
      inStock: true,
      quantity: 1,
      color: "from-red-600 to-purple-700",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 12,
      name: "Gravity Fruit",
      emoji: "🌀",
      price: "2,500,000",
      rarity: "Legendary",
      inStock: true,
      quantity: 1,
      color: "from-purple-500 to-blue-600",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 13,
      name: "Mammoth Fruit",
      emoji: "🦣",
      price: "2,700,000",
      rarity: "Legendary",
      inStock: false,
      quantity: 0,
      color: "from-brown-500 to-orange-600",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 14,
      name: "T-Rex Fruit",
      emoji: "🦖",
      price: "2,700,000",
      rarity: "Legendary",
      inStock: true,
      quantity: 1,
      color: "from-green-600 to-yellow-500",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 15,
      name: "Light Fruit",
      emoji: "💡",
      price: "650,000",
      rarity: "Rare",
      inStock: true,
      quantity: 4,
      color: "from-yellow-300 to-white",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 16,
      name: "Dark Fruit",
      emoji: "🌚",
      price: "500,000",
      rarity: "Rare",
      inStock: true,
      quantity: 5,
      color: "from-gray-800 to-black",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 17,
      name: "Ice Fruit",
      emoji: "🧊",
      price: "350,000",
      rarity: "Rare", 
      inStock: true,
      quantity: 6,
      color: "from-blue-300 to-cyan-500",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
    },
    {
      id: 18,
      name: "Flame Fruit",
      emoji: "🔥",
      price: "250,000",
      rarity: "Rare",
      inStock: false,
      quantity: 0,
      color: "from-red-500 to-orange-500",
      image: "/img/a9ac4b82-c23a-4e1a-ad9a-75e586bb8532.jpg"
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
      adminPanel: "Админ панель",
      adminPassword: "Пароль админа",
      login: "Войти",
      stockManagement: "Управление стоком",
      vipPayments: "VIP платежи",
      analytics: "Аналитика",
      vipOffer: "💎 VIP СТАТУС",
      vipPrice: "Всего за 99₽",
      becomeVip: "Стать VIP", 
      paymentInfo: "💳 Оплата переводом на карту",
      cardNumber: "Номер карты: 2202 2023 1234 5678",
      cardHolder: "Держатель: IVAN PETROV",
      paymentNote: "При переводе укажите ваш никнейм в игре",
      vipBenefits: "VIP Привилегии:",
      vipBenefit1: "Золотой ник в чате",
      vipBenefit2: "Приоритет в сообщениях", 
      vipBenefit3: "Эксклюзивный значок",
      vipBenefit4: "Уведомления о новых фруктах",
      inStock: "В наличии",
      outOfStock: "Нет в наличии",
      price: "Цена",
      quantity: "Количество",
      lastUpdate: "Последнее обновление",
      updateStock: "Обновить сток"
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
      adminPanel: "Admin Panel",
      adminPassword: "Admin Password", 
      login: "Login",
      stockManagement: "Stock Management",
      vipPayments: "VIP Payments",
      analytics: "Analytics",
      vipOffer: "💎 VIP STATUS",
      vipPrice: "Only ₽99",
      becomeVip: "Become VIP",
      paymentInfo: "💳 Payment by card transfer",
      cardNumber: "Card Number: 2202 2023 1234 5678",
      cardHolder: "Cardholder: IVAN PETROV",
      paymentNote: "Include your game nickname when transferring",
      vipBenefits: "VIP Benefits:",
      vipBenefit1: "Golden nickname in chat",
      vipBenefit2: "Message priority",
      vipBenefit3: "Exclusive badge",
      vipBenefit4: "New fruit notifications",
      inStock: "In Stock",
      outOfStock: "Out of Stock", 
      price: "Price",
      quantity: "Quantity",
      lastUpdate: "Last Update",
      updateStock: "Update Stock"
    }
  };

  const t = texts[language];

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

  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setAdminPassword('');
    }
  };

  const updateFruitStock = (id: number, field: string, value: any) => {
    setFruitStock(prev => prev.map(fruit => 
      fruit.id === id ? { ...fruit, [field]: value } : fruit
    ));
    setLastStockUpdate(new Date().toLocaleTimeString());
  };

  const handleBecomeVip = () => {
    // In real app, this would integrate with payment system
    window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Auto-update stock timestamp every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setLastStockUpdate(new Date().toLocaleTimeString());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-display">
      {/* Admin/Settings Button */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {isAdmin && (
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                size="icon"
                className="bg-red-800/80 border-red-500/50 backdrop-blur-sm hover:bg-red-700/20 hover:scale-110 transition-all duration-300"
              >
                <Icon name="Shield" className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-gaming-purple/50 max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-red-400 flex items-center gap-2">
                  <Icon name="Shield" />
                  {t.adminPanel}
                </DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="stock" className="space-y-4">
                <TabsList className="bg-slate-700">
                  <TabsTrigger value="stock">{t.stockManagement}</TabsTrigger>
                  <TabsTrigger value="payments">{t.vipPayments}</TabsTrigger>
                  <TabsTrigger value="analytics">{t.analytics}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="stock" className="space-y-4">
                  <div className="grid gap-4 max-h-96 overflow-y-auto">
                    {fruitStock.map((fruit) => (
                      <div key={fruit.id} className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
                        <img src={fruit.image} alt={fruit.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="flex-1">
                          <div className="font-bold text-gaming-yellow">{fruit.emoji} {fruit.name}</div>
                          <div className="text-sm text-gray-400">{fruit.price} ягод</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch 
                            checked={fruit.inStock}
                            onCheckedChange={(checked) => updateFruitStock(fruit.id, 'inStock', checked)}
                          />
                          <Input 
                            type="number" 
                            value={fruit.quantity}
                            onChange={(e) => updateFruitStock(fruit.id, 'quantity', parseInt(e.target.value) || 0)}
                            className="w-16 h-8 bg-slate-600 border-slate-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="payments" className="space-y-4">
                  <Card className="bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-green-400">💰 VIP Платежи</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-green-400">+99₽ от Player123</div>
                        <div className="text-sm text-gray-400">2 минуты назад</div>
                        <div className="text-2xl font-bold text-green-400">+99₽ от TradeMaster</div>
                        <div className="text-sm text-gray-400">15 минут назад</div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="analytics" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-gaming-cyan">📊 Статистика</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div>VIP пользователей: <span className="font-bold text-gaming-yellow">47</span></div>
                          <div>Сегодня продано: <span className="font-bold text-gaming-green">12 фруктов</span></div>
                          <div>Доход за день: <span className="font-bold text-green-400">1,188₽</span></div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-gaming-purple">🔥 Топ фрукты</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div>1. Dragon Fruit (8 продаж)</div>
                          <div>2. Shadow Fruit (6 продаж)</div>
                          <div>3. Phoenix Fruit (4 продажи)</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}

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
              {!isAdmin && (
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-gray-300">{t.adminPassword}:</div>
                  <Input 
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="bg-slate-700 border-slate-600"
                    placeholder="Введите пароль"
                  />
                  <Button 
                    onClick={handleAdminLogin}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    {t.login}
                  </Button>
                </div>
              )}
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
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge className="bg-green-500/20 text-green-400 px-4 py-2">
                <Icon name="Users" className="mr-2 h-4 w-4" />
                {t.online} 1,247
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 px-4 py-2">
                <Icon name="Clock" className="mr-2 h-4 w-4" />
                {t.lastUpdate}: {lastStockUpdate}
              </Badge>
              {isAdmin && (
                <Badge className="bg-red-500/20 text-red-400 px-4 py-2 animate-pulse">
                  <Icon name="Shield" className="mr-2 h-4 w-4" />
                  ADMIN MODE
                </Badge>
              )}
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
                <CardContent className="text-center space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  
                  <div className="bg-slate-800/50 rounded-lg p-4 text-left space-y-2">
                    <div className="text-gaming-cyan font-bold">{t.paymentInfo}</div>
                    <div className="text-sm space-y-1">
                      <div>{t.cardNumber}</div>
                      <div>{t.cardHolder}</div>
                      <div className="text-gaming-yellow">{t.paymentNote}</div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {fruitStock.map((fruit) => (
                <Card key={fruit.id} className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${!fruit.inStock ? 'opacity-60 grayscale' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="mb-3">
                      <img 
                        src={fruit.image} 
                        alt={fruit.name}
                        className="w-16 h-16 mx-auto rounded-lg object-cover mb-2"
                      />
                      <div className="text-3xl">{fruit.emoji}</div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gaming-yellow">{fruit.name}</CardTitle>
                    <Badge className={getRarityColor(fruit.rarity)}>
                      {fruit.rarity}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gaming-green mb-1">
                        💰 {fruit.price}
                      </div>
                      <div className="text-gray-400 text-xs">Ягоды</div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{t.quantity}:</span>
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
          <div className="text-xs text-gray-500 mt-2">
            Последнее обновление стока: {lastStockUpdate} | Всего фруктов в базе: {fruitStock.length}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BloxFruitsStock;