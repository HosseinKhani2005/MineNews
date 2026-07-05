"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import {
  User,
  Mail,
  Key,
  Pencil,
  X,
  Check,
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  Shield,
} from "lucide-react";

export default function DashboardSettingPage() {
  const { user } = useSelector((state) => state.user);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const newPassword = watch("newPassword");

  const validatePassword = (value) => {
    if (value.length < 8) return "حداقل ۸ کاراکتر";
    if (!/[a-z]/.test(value)) return "حداقل یک حرف کوچک";
    if (!/[A-Z]/.test(value)) return "حداقل یک حرف بزرگ";
    if (!/[0-9]/.test(value)) return "حداقل یک عدد";
    return true;
  };

  const validateConfirm = (value) => {
    if (value !== watch("newPassword")) return "رمزها مطابقت ندارند";
    return true;
  };

  const onSubmit = (data) => {
    console.log("تغییر پسورد:", data.newPassword);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setIsChangingPassword(false);
    reset();
  };

  const cancelPasswordChange = () => {
    setIsChangingPassword(false);
    reset();
  };

  return (
    <div className="py-4 sm:py-6">
      <div className="max-w-2xl mx-auto px-2 sm:px-4">
        {/* هدر */}
        <div className="mb-6 ">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            تنظیمات حساب
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            مدیریت اطلاعات شخصی و رمز عبور
          </p>
        </div>

        {/* اطلاعات شخصی */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 sm:p-5 mb-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <User className="w-4 h-4 text-emerald-500" />
            اطلاعات شخصی
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-2.5">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-white">
                {user.username}
              </span>
              <span className="text-xs text-gray-400 mr-auto">نام کاربری</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-2.5">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-white">
                {user.email}
              </span>
              <span className="text-xs text-gray-400 mr-auto">ایمیل</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
            برای تغییر نام کاربری یا ایمیل با پشتیبانی تماس بگیرید
          </p>
        </div>


        {/* تغییر پسورد */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-emerald-500" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                رمز عبور
              </h3>
            </div>
            {!isChangingPassword ? (
              <button
                onClick={() => setIsChangingPassword(true)}
                type="button"
                className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 font-semibold flex items-center gap-1"
              >
                <Pencil className="w-3.5 h-3.5" />
                تغییر
              </button>
            ) : (
              <button
                onClick={cancelPasswordChange}
                type="button"
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 font-semibold flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                انصراف
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {isChangingPassword ? (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="mt-3 space-y-3 overflow-hidden"
              >
                {/* رمز جدید */}
                <div>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      {...register("newPassword", {
                        required: "رمز عبور الزامی است",
                        validate: validatePassword,
                      })}
                      placeholder="رمز جدید (حداقل ۸ کاراکتر)"
                      className={`w-full bg-gray-50 dark:bg-gray-800 text-black dark:text-white border ${
                        errors.newPassword
                          ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700 focus:ring-emerald-500/20 focus:border-emerald-500"
                      } rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none focus:ring-2 transition`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.newPassword && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>

                {/* تکرار رمز */}
                <div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword", {
                        required: "تکرار رمز الزامی است",
                        validate: validateConfirm,
                      })}
                      placeholder="تکرار رمز جدید"
                      className={`w-full bg-gray-50 dark:bg-gray-800 text-black dark:text-white border ${
                        errors.confirmPassword
                          ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700 focus:ring-emerald-500/20 focus:border-emerald-500"
                      } rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none focus:ring-2 transition`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-xl transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      تایید تغییر رمز
                    </>
                  )}
                </button>

                <div className="text-xs text-gray-400 dark:text-gray-500 space-y-0.5">
                  <p>• حداقل ۸ کاراکتر</p>
                  <p>• حداقل یک حرف کوچک (a-z)</p>
                  <p>• حداقل یک حرف بزرگ (A-Z)</p>
                  <p>• حداقل یک عدد (0-9)</p>
                </div>
              </motion.form>
            ) : (
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-2.5">
                <Key className="w-4 h-4 text-gray-400" />
                <span>••••••••</span>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* پیام موفقیت */}
        <AnimatePresence>
          {saved && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl px-4 py-3 mt-4"
            >
              <CheckCircle className="w-4 h-4" />
              رمز عبور با موفقیت تغییر کرد
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}