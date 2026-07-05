"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "@/func/Countup";
import { useSelector } from "react-redux";

import {
  X,
  CheckCircle,
  ChevronLeft,
  ShoppingBag,
  Package,
  Gift,
  CreditCard,
  Flame,
  Plus,
  Wallet,
} from "lucide-react";
import { Sword, Gem, Crown, Pickaxe } from "lucide-react";
import { useState } from "react";

const summaryCards = [
  {
    title: "کل خریدها",
    value: 12,
    icon: ShoppingBag,
    accent: "from-emerald-500 to-cyan-400",
    change: "+2",
  },
  {
    title: "پکیج‌های فعال",
    value: 5,
    icon: Package,
    accent: "from-sky-500 to-indigo-400",
    change: "+1",
  },
  {
    title: "تخفیف‌های دریافت شده",
    value: 3,
    icon: Gift,
    accent: "from-amber-500 to-orange-400",
    change: "+1",
  },
  {
    title: "موجودی کیف پول",
    value: 250000,
    icon: CreditCard,
    accent: "from-violet-500 to-fuchsia-400",
    change: "+50,000",
    isPrice: true,
  },
];

const recentPurchases = [
  {
    title: "پک استارتر بقا",
    price: "149,000",
    date: "۱۴۰۳/۰۴/۱۵",
    status: "تحویل شده",
    icon: Package,
  },
  {
    title: "بسته الماس",
    price: "289,000",
    date: "۱۴۰۳/۰۴/۱۲",
    status: "در حال پردازش",
    icon: Gem,
  },
  {
    title: "پک نبرد ندر",
    price: "219,000",
    date: "۱۴۰۳/۰۴/۱۰",
    status: "تحویل شده",
    icon: Sword,
  },
  {
    title: "کیف سلطنتی",
    price: "399,000",
    date: "۱۴۰۳/۰۴/۰۸",
    status: "تحویل شده",
    icon: Crown,
  },
];

const activePackages = [
  {
    name: "پک استارتر بقا",
    remaining: "۱۴ روز",
    icon: Pickaxe,
    color: "from-emerald-500 to-green-400",
  },
  {
    name: "بسته الماس",
    remaining: "۲۸ روز",
    icon: Gem,
    color: "from-sky-500 to-blue-400",
  },
  {
    name: "پک نبرد ندر",
    remaining: "۷ روز",
    icon: Sword,
    color: "from-orange-500 to-red-400",
  },
];

// پیشنهادات ویژه
const specialOffers = [
  {
    name: "پک نبرد ندر",
    price: "219,000",
    discount: "۱۵٪",
    icon: Sword,
    color: "from-orange-500 to-red-400",
  },
  {
    name: "کیف سلطنتی",
    price: "399,000",
    discount: "۲۰٪",
    icon: Crown,
    color: "from-violet-500 to-pink-400",
  },
  {
    name: "بسته الماس",
    price: "289,000",
    discount: "۱۰٪",
    icon: Gem,
    color: "from-sky-500 to-blue-400",
  },
];

const currency = new Intl.NumberFormat("fa-IR");

// مبالغ شارژ کیف پول
const chargeAmounts = [50000, 100000, 200000, 500000];

export default function DashboardPage() {
  const { user } = useSelector((state) => state.user);
  const [showChargeModal, setShowChargeModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(100000);
  const [isCharging, setIsCharging] = useState(false);
  const [chargeSuccess, setChargeSuccess] = useState(false);

  const handleCharge = () => {
    setIsCharging(true);
    setTimeout(() => {
      setIsCharging(false);
      setChargeSuccess(true);
      setTimeout(() => {
        setChargeSuccess(false);
        setShowChargeModal(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="relative">
      {/* ===== کارت‌های آمار ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-6"
      >
        {summaryCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div
              className={`inline-flex rounded-xl bg-linear-to-br ${card.accent} p-2.5 text-white shadow-lg`}
            >
              <card.icon className="h-4 w-4" />
            </div>
            <div className="mt-3 text-2xl font-black text-gray-900 dark:text-white">
              {card.isPrice ? (
                `${currency.format(card.value)}`
              ) : (
                <CountUp
                  from={0}
                  to={card.value}
                  separator=","
                  direction="up"
                  duration={1}
                  delay={0}
                />
              )}
            </div>
            <div className="mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{card.title}</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {card.change}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== بخش اصلی ===== */}
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* ===== ستون چپ ===== */}
        <div className="space-y-6">
          {/* خریدهای اخیر */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 md:p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                🛒 خریدهای اخیر
              </h2>
              <Link
                href="/dashboard/shoppingCart"
                className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                مشاهده همه
              </Link>
            </div>
            <div className="space-y-3">
              {recentPurchases.map((purchase) => {
                const Icon = purchase.icon;
                const isDelivered = purchase.status === "تحویل شده";
                return (
                  <div
                    key={purchase.title}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          {purchase.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-gray-500">
                            {purchase.date}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              isDelivered
                                ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                            }`}
                          >
                            {purchase.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {purchase.price} تومان
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* پکیج‌های فعال */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 md:p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                📦 پکیج‌های فعال
              </h2>
            </div>
            <div className="space-y-3">
              {activePackages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.name}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-linear-to-br ${pkg.color} flex items-center justify-center text-white`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          {pkg.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          باقی‌مانده:{" "}
                          <span className="font-semibold text-emerald-600">
                            {pkg.remaining}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-16 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ===== ستون راست ===== */}
        <div className="space-y-6">
          {/* کیف پول */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-linear-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  کیف پول
                </h2>
              </div>
              <button
                onClick={() => setShowChargeModal(true)}
                className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                شارژ کیف پول
              </button>
            </div>
            <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4 border border-violet-200 dark:border-violet-800">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                موجودی فعلی
              </p>
              <p className="text-3xl font-black text-violet-700 dark:text-violet-400">
                {currency.format(250000)} تومان
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                  فعال
                </span>
                <span className="text-[10px] text-gray-400">|</span>
                <span className="text-[10px] text-gray-500">
                  آخرین شارژ: ۱۴۰۳/۰۴/۱۲
                </span>
              </div>
            </div>
          </motion.div>

          {/* پیشنهادات ویژه */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                🔥 پیشنهادات ویژه
              </h2>
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <div className="space-y-3">
              {specialOffers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <Link key={offer.name} href="/shop" className="block group">
                    <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-orange-50/30 dark:hover:bg-orange-950/20 transition">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-linear-to-br ${offer.color} flex items-center justify-center text-white`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            {offer.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-gray-500 line-through">
                              {offer.price} تومان
                            </span>
                            <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                              {offer.discount} تخفیف
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          خرید
                        </span>
                        <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:-translate-x-1 group-hover:text-emerald-500 transition rotate-180" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/shop"
              className="block w-full text-center mt-4 text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              مشاهده همه پیشنهادات →
            </Link>
          </motion.div>

          {/* وضعیت کاربر */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                وضعیت حساب
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  نوع حساب
                </span>
                <span className="font-bold text-gray-900 dark:text-white">
                  کاربر عادی
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">وضعیت</span>
                <span className="font-bold text-emerald-600">فعال</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  تاریخ عضویت
                </span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {user.dateCreate}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== مودال شارژ کیف پول ===== */}
      {showChargeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  شارژ کیف پول
                </h3>
              </div>
              <button
                onClick={() => setShowChargeModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              مبلغ مورد نظر برای شارژ کیف پول را انتخاب کنید
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {chargeAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`
                    p-3 rounded-xl border-2 text-sm font-bold transition
                    ${
                      selectedAmount === amount
                        ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300"
                        : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-violet-300 dark:hover:border-violet-700"
                    }
                  `}
                >
                  {currency.format(amount)} تومان
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl mb-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                مبلغ انتخابی:
              </span>
              <span className="text-sm font-bold text-violet-700 dark:text-violet-400">
                {currency.format(selectedAmount)} تومان
              </span>
            </div>

            <button
              onClick={handleCharge}
              disabled={isCharging}
              className={`
                w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition
                ${
                  isCharging
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-500/25"
                }
              `}
            >
              {isCharging ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  در حال پردازش...
                </>
              ) : chargeSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  شارژ موفق! ✅
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  پرداخت و شارژ
                </>
              )}
            </button>

            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-3">
              پرداخت شما با بالاترین سطح امنیت انجام می‌شود
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
