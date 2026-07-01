"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Gem,
  Crown,
  Pickaxe,
  Sparkles,
  ShieldCheck,
  Swords,
  Truck,
  WandSparkles,
  Star,
  TrendingUp,
  Zap,
  Sword,
  Building2,
  Trophy,
  Gamepad2,
  Skull,
  Shield,
  Crosshair,
  Flame,
  Users,
  Target,
  Blocks,
  Package,
  Percent,
  Gift,
  Clock,
} from "lucide-react";

// ============== داده‌های محصولات بر اساس دسته‌بندی ==============
const categories = {
  survival: {
    id: "survival",
    label: "سروایول",
    icon: Pickaxe,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    products: [
      {
        title: "پک استارتر بقا",
        price: "149,000",
        badge: "🔥 پرفروش",
        rating: 4.8,
        reviews: 124,
        description: "ابزارهای اولیه، غذا، مشعل و آیتم‌های ضروری برای شروع ماجراجویی.",
        icon: Pickaxe,
        features: ["ابزار سنگی", "32 مشعل", "64 غذا"],
        difficulty: "آسان",
      },
      {
        title: "بسته الماس",
        price: "289,000",
        badge: "💎 ویژه",
        rating: 4.9,
        reviews: 89,
        description: "مجموعه‌ای از تجهیزات الماسی برای رفتن به عمق غارها با امنیت بیشتر.",
        icon: Gem,
        features: ["زره الماسی", "شمش الماس", "افسون پایه"],
        difficulty: "متوسط",
      },
      {
        title: "پک ساخت و ساز",
        price: "179,000",
        badge: "🏗️ محبوب",
        rating: 4.6,
        reviews: 98,
        description: "برای ساختن خانه، قلعه و سازه‌های بزرگ با بلوک‌های متنوع و کاربردی.",
        icon: Building2,
        features: ["بلوک‌های تزئینی", "چوب و سنگ", "ست ساخت سریع"],
        difficulty: "آسان",
      },
      {
        title: "پک مزرعه‌داری",
        price: "129,000",
        badge: "🌾 جدید",
        rating: 4.5,
        reviews: 56,
        description: "همه چیز برای راه‌اندازی مزرعه حیوانات و کشاورزی پیشرفته.",
        icon: Blocks,
        features: ["بذرهای متنوع", "حیوانات", "ابزار کشاورزی"],
        difficulty: "آسان",
      },
    ],
  },
  bedwars: {
    id: "bedwars",
    label: "بدوارز",
    icon: Sword,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    borderColor: "border-red-200 dark:border-red-800",
    products: [
      {
        title: "پک شروع سریع",
        price: "99,000",
        badge: "⚡ پرفروش",
        rating: 4.9,
        reviews: 234,
        description: "آیتم‌های ضروری برای شروع قوی در بدوارز و حذف سریع حریفان.",
        icon: Sword,
        features: ["شمشیر آهنی", "تخته‌های سریع", "TNT ابتدایی"],
        difficulty: "آسان",
      },
      {
        title: "بسته حرفه‌ای",
        price: "299,000",
        badge: "🏆 حرفه‌ای",
        rating: 4.8,
        reviews: 167,
        description: "تجهیزات کامل برای بازیکنان حرفه‌ای بدوارز با استراتژی‌های پیشرفته.",
        icon: Trophy,
        features: ["زره الماس", "پیک الماس", "تخت‌خواب محافظ"],
        difficulty: "حرفه‌ای",
      },
      {
        title: "پک دفاعی",
        price: "159,000",
        badge: "🛡️ استراتژیک",
        rating: 4.7,
        reviews: 89,
        description: "بلوک‌های دفاعی و آیتم‌هایی برای محافظت از تخت‌خواب تیم.",
        icon: Shield,
        features: ["تخته‌های اوبسیدین", "گیلاس‌پاتر", "معجون‌های دفاعی"],
        difficulty: "متوسط",
      },
      {
        title: "پک حملات سریع",
        price: "199,000",
        badge: "💥 تهاجمی",
        rating: 4.6,
        reviews: 73,
        description: "برای حملات برق‌آسا و تخریب سریع تخت‌خواب حریفان.",
        icon: Crosshair,
        features: ["TNT پیشرفته", "پیک تخریب", "شتاب‌دهنده"],
        difficulty: "حرفه‌ای",
      },
    ],
  },
  arcade: {
    id: "arcade",
    label: "آرکید",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    products: [
      {
        title: "پک مینی‌گیم‌ها",
        price: "119,000",
        badge: "🎮 محبوب",
        rating: 4.7,
        reviews: 156,
        description: "مجموعه‌ای از آیتم‌های ویژه برای مینی‌گیم‌های آرکید.",
        icon: Gamepad2,
        features: ["توپ‌های بازی", "پرچم‌های تیمی", "افکت‌های ویژه"],
        difficulty: "آسان",
      },
      {
        title: "بسته اسکای‌وارز",
        price: "189,000",
        badge: "🏆 محبوب‌ترین",
        rating: 4.9,
        reviews: 203,
        description: "تجهیزات کامل برای پیروزی در اسکای‌وارز با استراتژی‌های هوشمندانه.",
        icon: Target,
        features: ["شروع قوی", "تخته‌های پل", "معجون پرش"],
        difficulty: "متوسط",
      },
      {
        title: "پک مبارزه تن به تن",
        price: "149,000",
        badge: "⚔️ جدید",
        rating: 4.5,
        reviews: 67,
        description: "بهترین سلاح‌ها و آیتم‌ها برای مبارزات تن به تن در آرکید.",
        icon: Users,
        features: ["شمشیرهای ویژه", "زره سبک", "معجون سرعت"],
        difficulty: "متوسط",
      },
      {
        title: "بسته هاردکور",
        price: "399,000",
        badge: "💀 چالش‌برانگیز",
        rating: 4.8,
        reviews: 95,
        description: "برای بازیکنانی که عاشق چالش‌های سخت در آرکید هستند.",
        icon: Skull,
        features: ["موانع پیشرفته", "تله‌ها", "باس‌فایت‌ها"],
        difficulty: "سخت",
      },
    ],
  },
};

// ============== کامپوننت اصلی ==============
export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("survival");
  const [selectedDifficulty, setSelectedDifficulty] = useState("همه");

  const currentCategory = categories[activeCategory];
  const currentProducts = currentCategory?.products || [];

  const filteredProducts = selectedDifficulty === "همه"
    ? currentProducts
    : currentProducts.filter(p => p.difficulty === selectedDifficulty);

  const difficulties = ["همه", "آسان", "متوسط", "حرفه‌ای", "سخت"];

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== هدر ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                فروشگاه
                <span className="text-emerald-600 dark:text-emerald-400"> ماین‌کرافت</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                بهترین پکیج‌ها برای حالت‌های مختلف بازی
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-900 rounded-full px-4 py-2 border border-gray-200 dark:border-gray-800 shadow-sm">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {filteredProducts.length} محصول
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== دکمه‌های دسته‌بندی ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`
                    relative group flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm
                    transition-all duration-300 border-2
                    ${isActive
                      ? `bg-linear-to-r ${category.color} text-white border-transparent shadow-lg`
                      : `bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600`
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
                  <span>{category.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-2xl -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* فیلتر سختی */}
          <div className="flex flex-wrap gap-2 mt-4">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                  ${selectedDifficulty === diff
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                {diff}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ===== شبکه محصولات ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + selectedDifficulty}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          >
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
                    
                    {/* هدر کارت با رنگ دسته‌بندی */}
                    <div className={`relative h-28 bg-linear-to-br ${currentCategory.color} overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
                      <div className="absolute inset-0 bg-black/5" />
                      
                      <div className="relative h-full p-4 flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border border-white/30 bg-white/20 text-white">
                          {product.badge}
                        </span>
                      </div>
                    </div>

                    {/* محتوای کارت */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                          {product.title}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          {product.difficulty}
                        </span>
                      </div>

                      {/* امتیاز */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {product.rating}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          ({product.reviews})
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {product.description}
                      </p>

                      {/* ویژگی‌ها */}
                      <div className="space-y-1.5 mb-4">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                            <div className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* قیمت و دکمه */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-black text-gray-900 dark:text-white">
                              {product.price}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">تومان</span>
                          </div>
                        </div>
                        <Link
                          href="/dashboard/shoppingCart"
                          className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition shadow-md shadow-emerald-600/20"
                        >
                          خرید
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ===== اگر محصولی نبود ===== */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Package className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              محصولی یافت نشد
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              برای این دسته‌بندی و سطح سختی محصولی موجود نیست
            </p>
          </motion.div>
        )}

      </div>
    </div>
  );
}