// app/news/page.jsx
"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Clock,
  Tag,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

// 📌 دیتای استاتیک اخبار (دست‌ساز)
const allNews = [
  {
    id: 1,
    title: "آپدیت 1.21 منتشر شد!",
    description:
      "ویژگی‌های جدید شامل بلاک‌های تازه، موجودات جدید و ماجراجویی‌های هیجان‌انگیز...",
    category: "آپدیت",
    icon: "🆕",
    date: "۱۴۰۳/۰۴/۰۵",
    image: "/images/news1.jpg",
    author: "علی رضایی",
    readTime: "۳ دقیقه",
    isFeatured: true,
  },
  {
    id: 2,
    title: "بهترین مودهای سال ۲۰۲۵",
    description:
      "معرفی ۱۰ مود برتر که تجربه‌ی بازی رو متحول می‌کنن و قابلیت‌های جدیدی اضافه می‌کنن...",
    category: "مود",
    icon: "⚡",
    date: "۱۴۰۳/۰۴/۰۳",
    image: "/images/news2.jpg",
    author: "سارا محمدی",
    readTime: "۵ دقیقه",
    isFeatured: false,
  },
  {
    id: 3,
    title: "رویداد بزرگ ماینکرفت کاپ",
    description:
      "مسابقات ساخت و ساز با جایزه‌ی نقدی ۱۰۰ میلیونی و حضور شما! ثبت‌نام از امروز شروع شد...",
    category: "رویداد",
    icon: "🏆",
    date: "۱۴۰۳/۰۴/۰۱",
    image: "/images/news3.jpg",
    author: "محمد کریمی",
    readTime: "۲ دقیقه",
    isFeatured: true,
  },
  {
    id: 4,
    title: "نسل جدید ماینکرفت معرفی شد",
    description:
      "گرافیک بهبود یافته، دنیای بزرگ‌تر و قابلیت‌های جدید که تجربه‌ی بازی رو متحول می‌کنه...",
    category: "اخبار",
    icon: "📢",
    date: "۱۴۰۳/۰۳/۲۸",
    image: "/images/news4.jpg",
    author: "ندا احمدی",
    readTime: "۴ دقیقه",
    isFeatured: false,
  },
  {
    id: 5,
    title: "آموزش ساخت ماشین‌های رداستون",
    description:
      "از صفر تا صد، ماشین‌های پیچیده با رداستون رو یاد بگیر و در بازی بدرخش...",
    category: "آموزش",
    icon: "🔴",
    date: "۱۴۰۳/۰۳/۲۵",
    image: "/images/news5.jpg",
    author: "حسین نوری",
    readTime: "۷ دقیقه",
    isFeatured: false,
  },
  {
    id: 6,
    title: "نسخه‌ی موبایل آپدیت شد",
    description:
      "بهبود عملکرد، گرافیک بهتر، رفع باگ‌های فراوان و اضافه شدن حالت چندنفره...",
    category: "آپدیت",
    icon: "📱",
    date: "۱۴۰۳/۰۳/۲۲",
    image: "/images/news6.jpg",
    author: "زهرا حسینی",
    readTime: "۳ دقیقه",
    isFeatured: false,
  },
  {
    id: 7,
    title: "معرفی بلاک‌های جدید در آپدیت 1.22",
    description:
      "بلاک‌های جدیدی که بازی رو به سطح بالاتری می‌برن و امکانات بیشتری به بازیکنان میدن...",
    category: "آپدیت",
    icon: "🪨",
    date: "۱۴۰۳/۰۳/۲۰",
    image: "/images/news7.jpg",
    author: "رضا گلستانی",
    readTime: "۴ دقیقه",
    isFeatured: false,
  },
  {
    id: 8,
    title: "مسابقه‌ی بزرگ ساخت و ساز",
    description:
      "بهترین سازنده‌ها رو در این مسابقه پیدا می‌کنیم. جوایز ویژه‌ای در انتظار شماست...",
    category: "رویداد",
    icon: "🎨",
    date: "۱۴۰۳/۰۳/۱۸",
    image: "/images/news8.jpg",
    author: "مریم رضایی",
    readTime: "۲ دقیقه",
    isFeatured: false,
  },
  {
    id: 9,
    title: "تکنیک‌های پیشرفته رداستون",
    description:
      "با این تکنیک‌ها، ماشین‌های پیچیده‌تری در ماینکرفت بساز و از همه جلو بزن...",
    category: "آموزش",
    icon: "🔧",
    date: "۱۴۰۳/۰۳/۱۵",
    image: "/images/news9.jpg",
    author: "پیمان عسکری",
    readTime: "۶ دقیقه",
    isFeatured: false,
  },
];

// دسته‌بندی‌ها
const categories = ["همه", "آپدیت", "مود", "رویداد", "اخبار", "آموزش"];
const English_Categories = [
  "all",
  "updates",
  "mods",
  "events",
  "news",
  "tutorials",
];

export default function NewsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    English_Categories.includes(category)
      ? setSelectedCategory(categories[English_Categories.indexOf(category)])
      : setSelectedCategory("null");
  },[]);

  // فیلتر اخبار بر اساس جستجو و دسته‌بندی
  const filteredNews = useMemo(() => {
    return allNews.filter((news) => {
      const matchesSearch =
        news.title.includes(searchTerm) ||
        news.description.includes(searchTerm);
      const matchesCategory =
        selectedCategory === "همه" || news.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // صفحه‌بندی
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // تغییر صفحه
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* هدر صفحه */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
            اخبار ماینکرفت
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            آخرین اخبار، آپدیت‌ها و رویدادهای دنیای ماینکرفت رو دنبال کن
          </p>
        </motion.div>

        {/* نوار جستجو و فیلتر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-md border border-gray-200 dark:border-gray-800 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* جستجو */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="جستجوی اخبار..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
              />
            </div>

            {/* فیلتر دسته‌بندی */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-gray-400 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white shadow-sm shadow-green-500/20"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* تعداد اخبار */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {filteredNews.length} خبر پیدا شد
        </div>

        {/* لیست اخبار */}
        {paginatedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200"
              >
                {/* تصویر (جاوا‌اسکریپت) */}
                <div className="w-full h-48 bg-linear-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center text-4xl">
                  {news.icon}
                </div>

                <div className="p-5">
                  {/* برچسب‌ها */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {news.category}
                    </span>
                    {news.isFeatured && (
                      <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        ویژه
                      </span>
                    )}
                  </div>

                  <Link href={`/news/${news.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition line-clamp-1">
                      {news.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                    {news.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {news.readTime}
                      </span>
                    </div>
                    <span className="text-green-600 dark:text-green-400 hover:underline">
                      {news.author}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              😕 خبری با این دسته‌بندی یا جستجو پیدا نشد
            </p>
          </div>
        )}

        {/* صفحه‌بندی */}
        {totalPages > 1 && (
          <div
            className="flex items-center justify-center gap-2 mt-10"
            dir="ltr"
          >
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? "bg-green-600 text-white shadow-sm shadow-green-500/20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
