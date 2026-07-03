"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  LifeBuoy,
  ChevronLeft,
  User,
  Bell,
  Package,
  Gift,
  Sparkles,
  Menu,
  X,
  Home,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { asynkLogout } from "@/store/userSlice";
import { ToggleTheme } from "@/store/themeSlice";

const navItems = [
  {
    href: "/dashboard",
    label: "داشبورد",
    icon: LayoutDashboard,
    description: "نمای کلی",
  },
  {
    href: "/dashboard/shoppingCart",
    label: "سبد خرید",
    icon: ShoppingCart,
    description: "مدیریت خریدها",
  },
  {
    href: "/dashboard/setting",
    label: "تنظیمات",
    icon: Settings,
    description: "تنظیمات حساب",
  },
  {
    href: "/dashboard/support",
    label: "پشتیبانی",
    icon: LifeBuoy,
    description: "تماس با ما",
  },
];

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.theme.darkmode);
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleTheme = () => {
    dispatch(ToggleTheme());
    const newTheme = !darkmode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogout = async () => {
    try {
      const result = await dispatch(asynkLogout());
      if (asynkLogout.fulfilled.match(result)) {
        router.push("/");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between rounded-2xl p-4 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                H
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  پنل کاربری
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user.username}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleTheme}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-400"
              >
                {darkmode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-400"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* منوی موبایل */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <nav className="p-3 space-y-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                            flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                            ${
                              isActive
                                ? "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                                : "hover:bg-gray-50 dark:hover:bg-gray-800"
                            }
                          `}
                      >
                        <div
                          className={`
                            w-10 h-10 rounded-xl flex items-center justify-center
                            ${
                              isActive
                                ? "bg-emerald-500 text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                            }
                          `}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        )}
                      </Link>
                    );
                  })}

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/20 transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-red-500">
                      <LogOut className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-red-500">
                      خروج از حساب
                    </span>
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ===== لایه‌بندی اصلی ===== */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr]">
          {/* ===== سایدبار (راست) ===== */}
          <aside className="lg:sticky lg:top-24 order-2 lg:order-1">
            <div className="hidden lg:block">
              <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                {/* هدر سایدبار */}
                <div className="relative overflow-hidden p-6 bg-linear-to-br from-gray-900 via-emerald-800 to-cyan-700">
                  <div className="absolute inset-0 opacity-20 bg-[radial-linear(circle_at_top_left,white,transparent_60%)]" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <User className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-white/80">خوش آمدید</p>
                          <h2 className="text-xl font-black text-white">
                            {user.username}
                          </h2>
                        </div>
                      </div>

                      <button
                        onClick={handleToggleTheme}
                        className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition flex items-center justify-center border border-white/30"
                        title={darkmode ? "حالت روشن" : "حالت تاریک"}
                      >
                        {darkmode ? (
                          <Sun className="w-5 h-5 text-white" />
                        ) : (
                          <Moon className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/80">
                      <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Package className="w-3.5 h-3.5" />
                        <span>۵ خرید</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Gift className="w-3.5 h-3.5" />
                        <span>۲ تخفیف</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ناوبری - بدون اسکرول اضافی */}
                <nav className="p-4 space-y-1.5">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`
                            group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                            ${
                              isActive
                                ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                            }
                          `}
                      >
                        <div
                          className={`
                            w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
                            ${
                              isActive
                                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                            }
                          `}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold">{item.label}</p>
                          <p className="text-xs opacity-70">
                            {item.description}
                          </p>
                        </div>

                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-1.5 h-8 rounded-full bg-emerald-500"
                            transition={{ type: "spring", duration: 0.5 }}
                          />
                        )}

                        <ChevronLeft
                          className={`
                            w-4 h-4 transition-all duration-200 rotate-180
                            ${
                              isActive
                                ? "text-emerald-500 translate-x-1"
                                : "text-gray-400 group-hover:translate-x-1 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                            }
                          `}
                        />
                      </Link>
                    );
                  })}

                  {/* دکمه خروج */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 hover:cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-red-500">
                      <LogOut className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">خروج از حساب</span>
                  </button>
                </nav>

                {/* پایین سایدبار - ثابت */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
                  <div className="bg-linear-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950/20 dark:to-cyan-950/20 rounded-2xl p-4 border border-emerald-200 dark:border-emerald-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">
                          پشتیبانی VIP
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          ۲۴ ساعته
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/dashboard/support"
                      className="block w-full mt-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-xl transition text-center"
                    >
                      تماس بگیرید
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* ===== محتوای اصلی ===== */}
          <main className="min-w-0 order-1 lg:order-2">{children}</main>
        </div>
      </div>
    </div>
  );
}
