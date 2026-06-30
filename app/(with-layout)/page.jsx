"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  Moon,
  Sun,
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  Award,
  Shield,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import CountUp from "@/func/Countup";

// نمونه اخبار (استاتیک)
const newsItems = [
  {
    id: 1,
    title: "آپدیت 1.21 منتشر شد!",
    description: "ویژگی‌های جدید، بلاک‌های تازه و ماجراجویی‌های هیجان‌انگیز...",
    category: "آپدیت",
    icon: "🆕",
    date: "۱۴۰۳/۰۴/۰۵",
  },
  {
    id: 2,
    title: "بهترین مودهای سال ۲۰۲۵",
    description: "معرفی ۱۰ مود برتر که تجربه‌ی بازی رو متحول می‌کنن...",
    category: "مود",
    icon: "⚡",
    date: "۱۴۰۳/۰۴/۰۳",
  },
  {
    id: 3,
    title: "رویداد بزرگ ماینکرفت کاپ",
    description: "مسابقات ساخت و ساز با جایزه‌ی نقدی ۱۰۰ میلیونی...",
    category: "رویداد",
    icon: "🏆",
    date: "۱۴۰۳/۰۴/۰۱",
  },
  {
    id: 4,
    title: "نسل جدید ماینکرفت معرفی شد",
    description: "گرافیک بهبود یافته، دنیای بزرگ‌تر و قابلیت‌های جدید...",
    category: "اخبار",
    icon: "📢",
    date: "۱۴۰۳/۰۳/۲۸",
  },
  {
    id: 5,
    title: "آموزش ساخت ماشین‌های رداستون",
    description: "از صفر تا صد، ماشین‌های پیچیده با رداستون...",
    category: "آموزش",
    icon: "🔴",
    date: "۱۴۰۳/۰۳/۲۵",
  },
  {
    id: 6,
    title: "نسخه‌ی موبایل آپدیت شد",
    description: "بهبود عملکرد، گرافیک بهتر و رفع باگ‌های فراوان...",
    category: "آپدیت",
    icon: "📱",
    date: "۱۴۰۳/۰۳/۲۲",
  },
];

// آمار سایت (استاتیک)
const stats = [
  { label: "اخبار منتشر شده", value: 124, icon: BookOpen },
  { label: "کاربران عضو", value: 3200, icon: Users },
  { label: "رویدادهای برگزار شده", value: 42, icon: Calendar },
  { label: "کامنت‌های ارسال شده", value: 870, icon: MessageSquare },
];

const features = [
  {
    title: "اخبار لحظه‌ای",
    description: "اولین نفری باش که از آپدیت‌ها و رویدادهای جدید مطلع می‌شه",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "آموزش‌های تخصصی",
    description: "آموزش‌های گام‌به‌گام برای ساخت ماشین‌های رداستون و بیشتر",
    icon: BookOpen,
    color: "text-blue-400",
  },
  {
    title: "جامعه‌ی فعال",
    description:
      "با هزاران ماینکرفت‌باز دیگه در ارتباط باش و تجربه‌ها رو به اشتراک بذار",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "امنیت و اعتماد",
    description: "با احراز هویت دو مرحله‌ای، حساب کاربریت همیشه امنه",
    icon: Shield,
    color: "text-purple-400",
  },
];

export default function HomePage() {
  const router = useRouter();
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();

  return (
    <div className="">
      {/* ========== بخش هیرو (همیشه با animate بماند) ========== */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              آخرین اخبار دنیای ماینکرفت
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-gray-900 dark:text-white">Mine</span>
              <span className="text-green-600 dark:text-green-400 bg-linear-to-r from-green-500 to-emerald-400 bg-clip-text ">
                News
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-black-100 dark:text-gray-300 max-w-2xl mx-auto">
              مرجع تخصصی اخبار، آپدیت‌ها و رویدادهای بازی ماینکرفت
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/news")}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-200 flex items-center gap-2"
              >
                مشاهده اخبار
                <ChevronRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/register")}
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                ثبت‌نام رایگان
                <Users className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== بخش آمار (با whileInView) ========== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 mt-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-md border border-gray-200 dark:border-gray-800"
            >
              <stat.icon className="w-8 h-8 mx-auto text-green-600 dark:text-green-400 mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  delay={0}
                />
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========== بخش اخبار (با whileInView) ========== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 mt-16"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-7 h-7 text-green-600 dark:text-green-400" />
              آخرین اخبار
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              جدیدترین اتفاقات دنیای ماینکرفت رو دنبال کن
            </p>
          </div>
          <Link
            href="/news"
            className="text-green-600 dark:text-green-400 hover:underline text-sm font-medium flex items-center gap-1"
          >
            مشاهده همه
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => router.push(`/news/${item.id}`)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                <span>📅 {item.date}</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  علاقه‌مندی
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========== بخش ویژگی‌ها (با whileInView) ========== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 mt-16"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            چرا{" "}
            <span className="text-green-600 dark:text-green-400">MineNews</span>
            ؟
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            امکاناتی که ما رو از بقیه متمایز می‌کنه
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200"
            >
              <feature.icon
                className={`w-10 h-10 mx-auto ${feature.color} mb-3`}
              />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========== بخش CTA (با whileInView) ========== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 mt-16"
      >
        <div className="bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            به جمع ماینکرفت‌بازها بپیوند!
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-6">
            عضو شو و اولین نفری باش که از اخبار جدید، آپدیت‌ها و رویدادهای ویژه
            مطلع می‌شه
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/register")}
            className="px-8 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Award className="w-5 h-5" />
            ثبت‌نام رایگان
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}