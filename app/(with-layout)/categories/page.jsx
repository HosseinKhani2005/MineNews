// app/categories/page.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Tag, 
  Newspaper, 
  Zap, 
  Trophy, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  Calendar,
  Users,
  Star
} from "lucide-react";

const categories = [
  {
    id: "updates",
    name: "آپدیت‌ها",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    description: "آخرین تغییرات و به‌روزرسانی‌های بازی",
    count: 34,
  },
  {
    id: "mods",
    name: "مودها",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    description: "معرفی و بررسی بهترین مودهای ماینکرفت",
    count: 28,
  },
  {
    id: "events",
    name: "رویدادها",
    icon: Trophy,
    color: "text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
    description: "مسابقات، جشنواره‌ها و رویدادهای ویژه",
    count: 18,
  },
  {
    id: "news",
    name: "اخبار",
    icon: Newspaper,
    color: "text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    description: "جدیدترین اخبار دنیای ماینکرفت",
    count: 42,
  },
  {
    id: "tutorials",
    name: "آموزش‌ها",
    icon: BookOpen,
    color: "text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
    description: "آموزش‌های گام‌به‌گام ساخت و ساز و رداستون",
    count: 15,
  },
  {
    id: "community",
    name: "جامعه",
    icon: Users,
    color: "text-pink-400",
    bg: "bg-pink-100 dark:bg-pink-900/30",
    description: "فعالیت‌ها و اخبار جامعه‌ی ماینکرفت",
    count: 0,
  },
];

const recentNews = [
  { id: 1, title: "آپدیت 1.21 منتشر شد!", category: "آپدیت‌ها", date: "۱۴۰۳/۰۴/۰۵" },
  { id: 2, title: "بهترین مودهای سال ۲۰۲۵", category: "مودها", date: "۱۴۰۳/۰۴/۰۳" },
  { id: 3, title: "رویداد بزرگ ماینکرفت کاپ", category: "رویدادها", date: "۱۴۰۳/۰۴/۰۱" },
];

export default function CategoriesPage() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="transition-colors duration-300 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* هدر */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Tag className="w-8 h-8 text-green-600 dark:text-green-400" />
            دسته‌بندی‌ها
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            اخبار و محتواها رو بر اساس دسته‌بندی مورد علاقه‌ات مرور کن
          </p>
        </motion.div>

        {/* لیست دسته‌بندی‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                hoveredCategory === category.id
                  ? "border-green-500 dark:border-green-400 scale-[1.02]"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${category.bg} ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">
                  {category.count} خبر
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {category.description}
              </p>
              <Link
                href={`/news?category=${category.id}`}
                className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline text-sm font-medium mt-4"
              >
                مشاهده اخبار
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* اخبار اخیر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
            اخبار اخیر
          </h2>
          <div className="space-y-4">
            {recentNews.map((news, index) => (
              <div
                key={news.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 ${
                  index < recentNews.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                  <Link
                    href={`/news/${news.id}`}
                    className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition font-medium"
                  >
                    {news.title}
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
                    {news.category}
                  </span>
                  <span>{news.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}