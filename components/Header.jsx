// components/Header.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ToggleTheme } from "@/store/themeslice";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(ToggleTheme());
    const newTheme = !darkmode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* لوگو با عکس جدید */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/iconimage.webp"
              alt="MineNews Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className="text-gray-900 dark:text-white">Mine</span>
              <span className="text-green-600 dark:text-green-400">News</span>
            </span>
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300">
            <Link
              href="/"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              خانه
            </Link>
            <Link
              href="/news"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              اخبار
            </Link>
            <Link
              href="/categories"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              دسته‌بندی
            </Link>
            <Link
              href="/shop"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              فروشگاه
            </Link>
          </div>

          {/* بخش راست */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              ورود
            </Link>
            <Link
              href="/register"
              className="hidden sm:inline-block px-4 py-2 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-xl transition shadow-sm hover:shadow-green-500/20"
            >
              ثبت‌نام
            </Link>

            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Toggle theme"
            >
              {darkmode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              خانه
            </Link>
            <Link
              href="/news"
              className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              اخبار
            </Link>
            <Link
              href="/categories"
              className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              دسته‌بندی
            </Link>
            <Link
              href="/shop"
              className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              فروشگاه
            </Link>
            <div className="flex gap-3 mt-2 pt-2 border-t border-gray-200 dark:border-gray-800">
              <Link
                href="/login"
                className="flex-1 text-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                ورود
              </Link>
              <Link
                href="/register"
                className="flex-1 text-center px-4 py-2 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-xl transition"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                ثبت‌نام
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
