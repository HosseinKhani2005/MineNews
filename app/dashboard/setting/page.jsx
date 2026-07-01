"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  Lock,
  ShieldCheck,
  Save,
  Camera,
  Mail,
  Phone,
  Bell,
  Eye,
  EyeOff,
  CheckCircle,
  Key,
  Shield,
} from "lucide-react";

export default function DashboardSettingPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* ===== هدر ===== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              ⚙️ تنظیمات حساب
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              اطلاعات شخصی خود را مدیریت کنید
            </p>
          </div>
          <button
            onClick={handleSave}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition shadow-sm w-full sm:w-auto"
          >
            <Save className="w-4 h-4" />
            ذخیره تغییرات
          </button>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[280px_1fr]">
          
          {/* ===== سایدبار پروفایل ===== */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit order-2 lg:order-1">
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-3xl sm:text-4xl text-white font-bold shadow-lg">
                  H
                </div>
                <button className="absolute -bottom-1 -right-1 bg-emerald-500 hover:bg-emerald-600 text-white p-1.5 rounded-full border-2 border-white dark:border-gray-900 transition shadow-sm">
                  <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>
              <h2 className="mt-3 text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                حسین خانی
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                @hosseinkhani1384
              </p>
              <div className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                امنیت بالا
              </div>
            </div>

            <div className="mt-4 sm:mt-6 space-y-1">
              <button className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium transition">
                <User className="w-4 h-4" />
                <span>اطلاعات شخصی</span>
              </button>
              <button className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium transition">
                <Bell className="w-4 h-4" />
                <span>اعلان‌ها</span>
              </button>
            </div>
          </div>

          {/* ===== محتوای اصلی ===== */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            
            {/* اطلاعات شخصی */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                اطلاعات شخصی
              </h3>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    نام کامل
                  </label>
                  <input
                    type="text"
                    defaultValue="حسین خانی"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    defaultValue="hosseinkhani1384"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline ml-1" />
                    ایمیل
                  </label>
                  <input
                    type="email"
                    defaultValue="hosein@example.com"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline ml-1" />
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    defaultValue="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* امنیت - فقط در دسکتاپ و تبلت نمایش داده شود */}
            <div className="hidden sm:block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                <Shield className="w-4 h-4 inline ml-1.5" />
                امنیت و ورود
              </h3>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    رمز عبور فعلی
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      defaultValue="12345678"
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 pl-9 sm:pl-11 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    رمز عبور جدید
                  </label>
                  <input
                    type="password"
                    placeholder="رمز جدید را وارد کنید"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Key className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">ورود دو مرحله‌ای</span>
                  </div>
                  <button
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`relative w-8 sm:w-10 h-4 sm:h-5 rounded-full transition ${
                      twoFactor ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  >
                    <span className={`absolute top-0.5 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white shadow-sm transition ${
                      twoFactor ? 'right-4.5 sm:right-5.5' : 'right-0.5'
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">حالت امن</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400">فعال</span>
                </div>
              </div>
            </div>

            {/* پیام ذخیره */}
            {saved && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                  تغییرات با موفقیت ذخیره شد! ✅
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}