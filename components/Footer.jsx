"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-16">
      

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-right">
          
          {/* ستون ۱: برند */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              ⛏️ Mine<span className="text-green-600 dark:text-green-400">News</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              مرجع تخصصی اخبار و آپدیت‌های دنیای ماینکرفت
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              ساخته شده با ❤️ برای ماینکرفت‌بازها
            </p>
          </motion.div>

          {/* ستون ۲: لینک‌های سریع */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              لینک‌های سریع
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  اخبار
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  دسته‌بندی‌ها
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  درباره ما
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* ستون ۳: دسترسی‌ها */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              دسترسی‌ها
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  قوانین و مقررات
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* ستون ۴: اطلاعات تماس */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              ارتباط با ما
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>📧 info@minenews.com</li>
              <li>📞 +۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸</li>
              <li>📍 ایران، تهران</li>
              <li className="pt-2">
                <div className="flex justify-center md:justify-start gap-3">
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">گیت‌هاب</a>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">توییتر</a>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">اینستاگرام</a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* کپی‌رایت */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 dark:text-gray-500"
        >
          <p>© {new Date().getFullYear()} MineNews. تمامی حقوق محفوظ است.</p>
          <p>نسخه ۲.۰ | ساخته شده با Next.js 15</p>
        </motion.div>
      </div>
    </footer>
  );
}