"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Clock3,
  Gem,
  Crown,
  Pickaxe,
  Sparkles,
  Package,
  ShieldCheck,
  Swords,
  Truck,
  WandSparkles,
  ShoppingBag,
  Flame,
} from "lucide-react";

const products = [
  {
    title: "پک استارتر بقا",
    price: "149,000",
    badge: "پرفروش",
    description:
      "ابزارهای اولیه، غذا، مشعل و آیتم‌های ضروری برای شروع ماجراجویی.",
    icon: Pickaxe,
    accent: "from-emerald-500 via-lime-500 to-yellow-400",
    features: ["ابزار سنگی", "32 مشعل", "64 غذا"],
  },
  {
    title: "بسته الماس",
    price: "289,000",
    badge: "ویژه",
    description:
      "مجموعه‌ای از تجهیزات الماسی برای رفتن به عمق غارها با امنیت بیشتر.",
    icon: Gem,
    accent: "from-cyan-500 via-sky-500 to-blue-500",
    features: ["زره الماسی", "شمش الماس", "افسون پایه"],
  },
  {
    title: "پک نبرد ندر",
    price: "219,000",
    badge: "جدید",
    description:
      "سلاح، زره و آیتم‌های مناسب برای ورود به ندر و مبارزه با موب‌ها.",
    icon: Swords,
    accent: "from-orange-500 via-red-500 to-rose-500",
    features: ["شمشیر تقویت‌شده", "معجون مقاومت", "بلوک‌های ضدآتش"],
  },
  {
    title: "کیف سلطنتی",
    price: "399,000",
    badge: "لوکس",
    description:
      "بسته کامل برای بازیکن‌های حرفه‌ای با آیتم‌های کمیاب و تزئینی.",
    icon: Crown,
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    features: ["آیتم‌های نایاب", "دکور پایه", "هدیه ویژه"],
  },
  {
    title: "پک ساخت و ساز",
    price: "179,000",
    badge: "محبوب",
    description:
      "برای ساختن خانه، قلعه و سازه‌های بزرگ با بلوک‌های متنوع و کاربردی.",
    icon: Box,
    accent: "from-stone-500 via-zinc-500 to-neutral-700",
    features: ["بلوک‌های تزئینی", "چوب و سنگ", "ست ساخت سریع"],
  },
  {
    title: "بسته افسون و جادو",
    price: "249,000",
    badge: "جادویی",
    description:
      "افسون‌های مهم، کتاب‌های کمیاب و آیتم‌هایی برای ارتقای تجهیزات.",
    icon: WandSparkles,
    accent: "from-fuchsia-500 via-purple-500 to-indigo-500",
    features: ["کتاب افسون", "لپیس", "ست ارتقا"],
  },
];

const highlights = [
  { label: "تحویل فوری", value: "آنلاین", icon: Truck },
  { label: "پشتیبانی", value: "24 ساعته", icon: BadgeCheck },
  { label: "پرداخت امن", value: "تضمینی", icon: ShieldCheck },
];

export default function ShopPage() {
  return (
    <div className="py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-4xl border border-emerald-200/70 dark:border-gray-800 bg-linear-to-br from-slate-950 via-emerald-950 to-emerald-700 text-white shadow-2xl mb-10"
        >
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,white,transparent_28%),radial-gradient(circle_at_bottom_right,#000,transparent_25%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm border border-white/15 mb-5">
                  <Sparkles className="w-4 h-4" />
                  فروشگاه ویژه ماینکرافت
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-4 max-w-2xl">
                  آیتم‌های ماینکرافت، شبیه یک فروشگاه واقعی و آماده‌ی خرید
                </h1>
                <p className="text-emerald-50/90 text-sm sm:text-base md:text-lg max-w-2xl leading-7">
                  پک‌های بقا، تجهیزات ندر، الماس و بسته‌های مخصوص ساخت و ساز را
                  با طراحی تمیز، قیمت مشخص و انتخاب سریع ببین.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="min-w-37.5 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md border border-white/15"
                  >
                    <div className="flex items-center gap-2 text-xs text-emerald-50/80 mb-1">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                    <p className="text-base font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.75rem] bg-white/10 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-50/80">پیشنهاد امروز</p>
                    <p className="text-xl font-bold">پک استارتر بقا</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-black/15 border border-white/10 p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-emerald-100/80">قیمت</span>
                    <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-semibold text-green-100">
                      پرفروش
                    </span>
                  </div>
                  <div className="text-3xl font-black">
                    149,000{" "}
                    <span className="text-base font-medium text-emerald-100/80">
                      تومان
                    </span>
                  </div>
                </div>
                <ul className="grid gap-2 text-sm text-emerald-50/90">
                  <li className="flex items-center gap-2">
                    <Clock3 className="w-4 h-4" /> تحویل سریع و بدون انتظار
                  </li>
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4" /> مناسب شروع بقا و ماجراجویی
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-4 h-4" /> بسته‌بندی تمیز و مشخص
                  </li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] bg-white/8 backdrop-blur-md border border-white/10 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/12 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">
                    خرید سریع، ظاهر تمیز، نمایش ریسپانسیو
                  </p>
                </div>
                <p className="text-sm text-emerald-50/80 leading-6">
                  این بخش طوری چیده شده که در موبایل، تبلت و دسکتاپ خوانا و
                  جمع‌وجور بماند.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                محصولات فروشگاه
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                کارت‌ها در موبایل یک‌ستونه، در تبلت دو ستونه و در دسکتاپ
                چندستونه نمایش داده می‌شوند.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              پیشنهادهای منتخب
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.75rem] bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`h-24 bg-linear-to-br ${product.accent} relative`}
              >
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,white,transparent_35%)]" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-black/20 to-transparent" />
                <div className="relative h-full p-4 flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/18 backdrop-blur-md text-white flex items-center justify-center shadow-lg border border-white/15">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <span className="rounded-full bg-black/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold border border-white/15">
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-6 mb-4 min-h-12">
                  {product.description}
                </p>

                <div className="space-y-2 mb-5">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      قیمت
                    </p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white leading-none mt-1">
                      {product.price}
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-1">
                        تومان
                      </span>
                    </p>
                  </div>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition shadow-md shadow-emerald-600/20 shrink-0"
                  >
                    خرید
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
