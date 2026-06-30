"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "@/func/Countup";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  CircleCheckBig,
  Clock3,
  Diamond,
  Flame,
  LayoutGrid,
  MessageSquare,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const summaryCards = [
  {
    title: "بازدید امروز",
    value: 18420,
    icon: TrendingUp,
    accent: "from-emerald-500 to-cyan-400",
    change: "+12%",
  },
  {
    title: "کاربران فعال",
    value: 3621,
    icon: Users,
    accent: "from-sky-500 to-indigo-400",
    change: "+8%",
  },
  {
    title: "خبرهای منتشر شده",
    value: 128,
    icon: BookOpen,
    accent: "from-amber-500 to-orange-400",
    change: "+4%",
  },
  {
    title: "نظرات تازه",
    value: 942,
    icon: MessageSquare,
    accent: "from-violet-500 to-fuchsia-400",
    change: "+19%",
  },
];

const quickActions = [
  { label: "ثبت خبر جدید", href: "/news", icon: ArrowUpRight },
  { label: "مدیریت دسته‌ها", href: "/categories", icon: LayoutGrid },
  { label: "مشاهده رویدادها", href: "/news", icon: CalendarDays },
  { label: "بررسی اعضا", href: "/register", icon: Users },
];

const progressItems = [
  { label: "تکمیل انتشار اخبار", value: 86, tone: "bg-emerald-500" },
  { label: "تعامل کاربران", value: 72, tone: "bg-sky-500" },
  { label: "پوشش دسته‌بندی‌ها", value: 91, tone: "bg-amber-500" },
  { label: "آماده‌سازی رویدادها", value: 64, tone: "bg-violet-500" },
];

const liveFeed = [
  {
    title: "یک خبر داغ منتشر شد",
    detail: "تیم تحریریه خبر آپدیت 1.21 را منتشر کرد",
    time: "2 دقیقه پیش",
    icon: Bell,
  },
  {
    title: "پست محبوب هفته",
    detail: "آموزش رداستون بیشترین بازدید را گرفت",
    time: "18 دقیقه پیش",
    icon: Flame,
  },
  {
    title: "افزایش تعامل",
    detail: "کاربران 19٪ بیشتر کامنت گذاشته‌اند",
    time: "1 ساعت پیش",
    icon: TrendingUp,
  },
];

const sideHighlights = [
  { label: "اعلان‌های خوانده‌نشده", value: "28", icon: Bell },
  { label: "خبرهای ویژه", value: "7", icon: Sparkles },
  { label: "موارد نیازمند بررسی", value: "3", icon: CircleCheckBig },
];

const tasks = [
  { label: "بازبینی آخرین خبرها", done: true },
  { label: "تنظیم کاور خبر اصلی", done: true },
  { label: "افزودن بنر رویداد", done: false },
  { label: "بررسی کامنت‌های جدید", done: false },
];

export default function DashboardPage() {
  return (
    <div className="relative overflow-hidden pb-16 pt-8 md:pt-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.20),transparent_34%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_26%),linear-gradient(to_bottom,rgba(255,255,255,0.96),transparent)] dark:bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.24),transparent_34%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_26%),linear-gradient(to_bottom,rgba(2,6,23,0.96),transparent)]" />

      {/* ========== بخش اصلی (با whileInView) ========== */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]"
        >
          <div className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                <Diamond className="h-4 w-4" />
                داشبورد زنده
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <Clock3 className="h-4 w-4" />
                به‌روزرسانی خودکار
              </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  داشبوردی روان برای کنترل همه‌چیز
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                  این صفحه برای نگاه سریع به آمار، خبرهای داغ، فعالیت کاربران و
                  مسیرهای مهم سایت طراحی شده تا حس یک پنل مدیریتی واقعی و تمیز
                  را بدهد.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
                  >
                    ورود به اخبار
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/categories"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:border-emerald-500/40 dark:hover:text-emerald-300"
                  >
                    مدیریت دسته‌بندی‌ها
                    <ChevronLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-4xl border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_25px_80px_rgba(15,23,42,0.18)] dark:border-slate-800 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">نمای کلی امروز</p>
                    <h2 className="mt-1 text-xl font-bold">وضعیت سلامت پنل</h2>
                  </div>
                  <BarChart3 className="h-6 w-6 text-emerald-400" />
                </div>

                <div className="mt-5 rounded-3xl bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>نرخ تعامل</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <ArrowUpRight className="h-4 w-4" />
                      در حال رشد
                    </span>
                  </div>
                  <div className="mt-4 text-5xl font-black tracking-tight text-white">
                    91%
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[91%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                  {sideHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/5 px-3 py-4"
                    >
                      <item.icon className="mx-auto h-5 w-5 text-emerald-400" />
                      <div className="mt-2 text-lg font-bold">{item.value}</div>
                      <div className="mt-1 text-slate-300">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-4xl border border-slate-200 bg-white/80 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                  دسترسی سریع
                </h2>
                <Zap className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {quickActions.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/40 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/10"
                  >
                    <span className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <span className="rounded-xl bg-white p-2 shadow-sm dark:bg-slate-950">
                        <item.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      </span>
                      {item.label}
                    </span>
                    <ChevronLeft className="h-4 w-4 text-slate-400 transition group-hover:-translate-x-1 group-hover:text-emerald-500" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white/80 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                  کارهای امروز
                </h2>
                <CircleCheckBig className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="mt-4 space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.label}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-800"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${task.done ? "bg-emerald-500/15 text-emerald-500" : "bg-slate-100 text-slate-400 dark:bg-slate-900"}`}
                    >
                      <CircleCheckBig className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {task.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== کارت‌های خلاصه (با whileInView) ========== */}
      <section className="max-w-7xl mx-auto px-4 mt-8 md:mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {summaryCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-4xl border border-slate-200 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
            >
              <div
                className={`inline-flex rounded-2xl bg-linear-to-br ${card.accent} p-3 text-white shadow-lg`}
              >
                <card.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-3xl font-black text-slate-950 dark:text-white">
                <CountUp
                  from={0}
                  to={card.value}
                  separator=","
                  direction="up"
                  duration={1}
                  delay={0}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>{card.title}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {card.change}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========== بخش پایین (با whileInView) ========== */}
      <section className="max-w-7xl mx-auto px-4 mt-10 md:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="rounded-4xl border border-slate-200 bg-white/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                  روند فعالیت‌ها
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  نمودار ساده و خوانا برای فهم سریع وضعیت امروز
                </p>
              </div>
              <Play className="h-5 w-5 text-emerald-500" />
            </div>

            <div className="mt-6 space-y-4">
              {progressItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {item.label}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {item.value}%
                    </span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-slate-100 dark:bg-slate-900">
                    <div
                      className={`h-3 rounded-full ${item.tone}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-950 p-5 text-white dark:bg-slate-900">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Star className="h-4 w-4 text-amber-400" />
                  میانگین بازدید
                </div>
                <div className="mt-3 text-3xl font-black">4.8K</div>
              </div>
              <div className="rounded-3xl bg-emerald-500 p-5 text-slate-950">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-900/70">
                  <BarChart3 className="h-4 w-4" />
                  نرخ ماندگاری
                </div>
                <div className="mt-3 text-3xl font-black">73%</div>
              </div>
              <div className="rounded-3xl bg-sky-500 p-5 text-white">
                <div className="flex items-center gap-2 text-sm text-sky-50">
                  <CalendarDays className="h-4 w-4" />
                  برنامه امروز
                </div>
                <div className="mt-3 text-3xl font-black">6 رویداد</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-4xl border border-slate-200 bg-white/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                  فید زنده
                </h2>
                <Bell className="h-5 w-5 text-emerald-500" />
              </div>

              <div className="mt-5 space-y-4">
                {liveFeed.map((item, index) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-slate-950 dark:text-white">
                          {item.title}
                        </p>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {item.detail}
                      </p>
                      {index < liveFeed.length - 1 ? (
                        <div className="mt-4 h-px bg-slate-200 dark:bg-slate-800" />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl bg-linear-to-r from-emerald-600 via-emerald-500 to-cyan-500 p-6 text-white shadow-[0_30px_90px_rgba(16,185,129,0.24)] md:p-7">
              <h2 className="text-2xl font-black">همه‌چیز آماده است</h2>
              <p className="mt-3 text-sm leading-7 text-emerald-50">
                داشبورد فعلی طوری چیده شده که روی موبایل و دسکتاپ روان بماند و
                سریع بتوانی به بخش‌های اصلی سایت بروی.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:-translate-y-0.5"
                >
                  شروع سریع
                  <Sparkles className="h-4 w-4" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  ورود به حساب
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}