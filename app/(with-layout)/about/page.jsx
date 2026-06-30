// app/about/page.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  Award,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import CountUp from "@/func/Countup";

export default function AboutPage() {
  
  const stats = [
    { label: "اخبار منتشر شده", value: 124, icon: BookOpen },
    { label: "کاربران عضو", value: 3200, icon: Users },
    { label: "رویدادها", value: 42, icon: Calendar },
    { label: "کامنت‌ها", value: 87, icon: MessageSquare },
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
      title: "جامعه فعال",
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

  return (
    <div className="transition-colors duration-300 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========== هدر (با animate بماند) ========== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />
            درباره MineNews
          </h1>
          <p className="text-gray-800 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            مرجع تخصصی اخبار، آپدیت‌ها و رویدادهای بازی ماینکرفت
          </p>
        </motion.div>

        {/* ========== داستان ما (با whileInView) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-800 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">⛏️</span> داستان ما
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ما عاشق ماینکرفت هستیم. از روزی که اولین بلوک رو گذاشتم، می‌دونستم
            که این بازی یه جای خاص توی قلب من داره. تصمیم گرفتیم یه پلتفرم
            بسازیم که همه‌ی ماینکرفت‌بازها بتونن از آخرین اخبار، آپدیت‌ها و
            رویدادها مطلع بشن.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
            امروز، MineNews به یه جامعه‌ی بزرگ از بازیکنان تبدیل شده که هر روز
            برای دیدن جدیدترین اتفاقا به اینجا می‌یان.
          </p>
        </motion.div>

        {/* ========== آمار (با whileInView) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
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
        </motion.div>

        {/* ========== ویژگی‌ها (با whileInView) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-800 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            چرا{" "}
            <span className="text-green-600 dark:text-green-400">MineNews</span>
            ؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <feature.icon
                  className={`w-6 h-6 ${feature.color} shrink-0 mt-1`}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ========== تیم ما (با whileInView) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-800 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            تیم ما
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            تیم MineNews متشکل از ماینکرفت‌بازهای حرفه‌ای، برنامه‌نویسان و
            علاقه‌مندان به محتوای بازی هست. همه‌ی ما یک هدف داریم:
            <span className="text-green-600 dark:text-green-400 font-medium">
              {" "}
              ارائه‌ی بهترین اخبار و محتوا به جامعه‌ی ماینکرفت.
            </span>
          </p>
        </motion.div>

        {/* ========== CTA (با whileInView) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-3">به جمع ما بپیوند!</h2>
          <p className="text-green-100 max-w-xl mx-auto mb-6">
            عضو شو و اولین نفری باش که از اخبار جدید و رویدادها مطلع می‌شه
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            ثبت‌نام رایگان
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}