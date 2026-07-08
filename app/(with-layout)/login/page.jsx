// app/login/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { asynkLogin, setErrorNull } from "@/store/userSlice";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function LoginPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.user,
  );
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(setErrorNull());

    return () => {
      dispatch(setErrorNull());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, loading, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const recaptchaToken = await executeRecaptcha("login");
      const result = await dispatch(
        asynkLogin({
          email: data.email,
          password: data.password,
          recaptchaToken,
        }),
      );
      if (asynkLogin.fulfilled.match(result)) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800"
      >
        {/* هدر */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">⛏️</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            خوش آمدی!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            برای ورود، ایمیل و رمز عبور را وارد کن
          </p>
        </div>

        {/* فرم */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* ایمیل */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ایمیل
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                {...register("email", {
                  required: "ایمیل اجباری است",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیل معتبر نیست",
                  },
                })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                placeholder="example@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email.message}
              </p>
            )}
          </div>

          {/* رمز عبور */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              رمز عبور
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "رمز عبور اجباری است",
                  minLength: {
                    value: 6,
                    message: "رمز عبور حداقل ۶ کاراکتر باشد",
                  },
                })}
                className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.password.message}
              </p>
            )}
          </div>

          {/* ✅ نمایش خطا */}
          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-950/30 py-2 rounded-lg flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? "⏳ در حال ورود..." : "ورود"}
          </motion.button>
        </form>

        {/* لینک‌ها */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          حساب کاربری نداری؟{" "}
          <Link
            href="/register"
            className="text-green-600 dark:text-green-400 hover:underline font-medium"
          >
            ثبت‌نام کن
          </Link>
        </p>
        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-3">
          <Link href="/" className="hover:underline">
            رمز عبور را فراموش کردی؟
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
