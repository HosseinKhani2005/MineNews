"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CreditCard,
  Minus,
  Package,
  Plus,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Trash2,
  ShoppingBag,
  User,
  Gamepad2,
  CheckCircle,
  AlertCircle,
  Truck,
  Clock,
  ArrowRight,
  X,
  ShoppingCart,
  Eye,
  Wallet,
  AlertTriangle,
  CreditCard as CreditCardIcon,
} from "lucide-react";

const initialCartItems = [
  {
    id: 1,
    name: "پک استارتر بقا",
    price: 149000,
    quantity: 1,
  },
  {
    id: 2,
    name: "بسته الماس",
    price: 289000,
    quantity: 2,
  },
  {
    id: 3,
    name: "پک نبرد ندر",
    price: 219000,
    quantity: 1,
  },
];

const currency = new Intl.NumberFormat("fa-IR");

export default function ShoppingCartPage() {
  const [items, setItems] = useState(initialCartItems);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const [showChargeModal, setShowChargeModal] = useState(false);
  const [insufficientFunds, setInsufficientFunds] = useState(false);

  const walletBalance = 200000;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 500000 ? 0 : 45000;
  const discount = subtotal > 300000 ? 50000 : 0;
  const total = subtotal + shipping - discount;

  const hasEnoughBalance = walletBalance >= total;

  const increaseQuantity = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const validateUsername = (name) => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    if (!name) {
      setUsernameError("نام کاربری الزامی است");
      return false;
    }
    if (!regex.test(name)) {
      setUsernameError("۳ تا ۱۶ کاراکتر، حروف انگلیسی یا عدد");
      return false;
    }
    setUsernameError("");
    return true;
  };

  const handlePurchase = () => {
    if (!validateUsername(username)) return;
    if (items.length === 0) {
      setUsernameError("سبد خرید خالی است");
      return;
    }

    if (paymentMethod === "wallet" && !hasEnoughBalance) {
      setInsufficientFunds(true);
      setTimeout(() => {
        setShowChargeModal(true);
        setInsufficientFunds(false);
      }, 1500);
      return;
    }

    setIsPurchasing(true);
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseSuccess(true);
      setTimeout(() => {
        setPurchaseSuccess(false);
        setItems([]);
        setUsername("");
      }, 3000);
    }, 1500);
  };

  const chargeAmounts = [50000, 100000, 200000, 500000];
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
    <div className="py-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== هدر ===== */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              🛒 سبد خرید
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {items.length} محصول در سبد خرید
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              <Eye className="w-4 h-4" />
              مشاهده محصولات
            </Link>
            {items.length > 0 && (
              <button
                onClick={() => setItems([])}
                className="text-sm text-red-500 hover:text-red-600 transition flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                خالی کردن سبد
              </button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-12 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              سبد خرید خالی است
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
              برای خرید به فروشگاه بروید
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition"
            >
              رفتن به فروشگاه
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            
            {/* ===== ستون محصولات ===== */}
            <div className="flex flex-col">
              <div className="flex-1 space-y-3">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center shrink-0">
                        <Package className="w-6 h-6 text-emerald-500" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          {currency.format(item.price)} تومان
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold text-gray-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="text-right min-w-17.5">
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            {currency.format(item.price * item.quantity)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-gray-400 hover:text-red-500 transition"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {/* دکمه ادامه خرید - چسبیده به پایین */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline transition text-sm font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  ادامه خرید از فروشگاه
                </Link>
              </div>
            </div>

            {/* ===== ستون پرداخت ===== */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                  جزئیات پرداخت
                </h3>

                {/* انتخاب روش پرداخت */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    روش پرداخت
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPaymentMethod("wallet")}
                      className={`
                        flex items-center justify-center gap-2 p-3 rounded-xl border-2 text-sm font-semibold transition
                        ${paymentMethod === "wallet"
                          ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300'
                          : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-violet-300 dark:hover:border-violet-700'
                        }
                      `}
                    >
                      <Wallet className="w-4 h-4" />
                      کیف پول
                      <span className="text-[10px] text-gray-400">
                        ({currency.format(walletBalance)})
                      </span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`
                        flex items-center justify-center gap-2 p-3 rounded-xl border-2 text-sm font-semibold transition
                        ${paymentMethod === "card"
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300'
                          : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-emerald-300 dark:hover:border-emerald-700'
                        }
                      `}
                    >
                      <CreditCardIcon className="w-4 h-4" />
                      کارت بانکی
                    </button>
                  </div>
                </div>

                {/* نمایش موجودی کیف پول */}
                {paymentMethod === "wallet" && (
                  <div className={`rounded-xl p-3 mb-4 border ${
                    hasEnoughBalance 
                      ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
                      : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wallet className={`w-4 h-4 ${
                          hasEnoughBalance ? 'text-emerald-600' : 'text-red-500'
                        }`} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          موجودی کیف پول
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${
                        hasEnoughBalance ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'
                      }`}>
                        {currency.format(walletBalance)} تومان
                      </span>
                    </div>
                    {!hasEnoughBalance && (
                      <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>موجودی کافی نیست! لطفاً کیف پول خود را شارژ کنید.</span>
                      </div>
                    )}
                  </div>
                )}

                {/* جزئیات قیمت */}
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>جمع کالاها</span>
                    <span>{currency.format(subtotal)} تومان</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" />
                      هزینه ارسال
                    </span>
                    <span>{shipping === 0 ? 'رایگان' : currency.format(shipping) + ' تومان'}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                      <span className="flex items-center gap-1">
                        🎁 تخفیف
                      </span>
                      <span>-{currency.format(discount)} تومان</span>
                    </div>
                  )}
                  
                  <div className="h-px bg-gray-200 dark:bg-gray-700" />
                  
                  <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white">
                    <span>مبلغ نهایی</span>
                    <span className="text-lg">{currency.format(total)} تومان</span>
                  </div>
                </div>

                {/* ورود نام کاربری */}
                <div className="mt-5">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Gamepad2 className="w-4 h-4" />
                      نام کاربری ماین‌کرافت
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (usernameError) validateUsername(e.target.value);
                    }}
                    onBlur={() => validateUsername(username)}
                    placeholder="Steve_123"
                    className={`
                      w-full bg-gray-50 dark:bg-gray-800 border rounded-xl px-4 py-2.5 text-sm
                      transition-all duration-200
                      ${usernameError 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 dark:border-gray-700 focus:border-emerald-500'
                      }
                      focus:outline-none focus:ring-2 focus:ring-emerald-500/20
                      dark:text-white
                    `}
                  />
                  {usernameError && (
                    <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                      <AlertCircle className="w-3 h-3" />
                      {usernameError}
                    </p>
                  )}
                  {username && !usernameError && (
                    <p className="flex items-center gap-1 mt-1 text-xs text-emerald-500">
                      <CheckCircle className="w-3 h-3" />
                      نام کاربری معتبر است
                    </p>
                  )}
                </div>

                {/* دکمه پرداخت */}
                <button
                  onClick={handlePurchase}
                  disabled={
                    items.length === 0 || 
                    isPurchasing || 
                    !username ||
                    (paymentMethod === "wallet" && !hasEnoughBalance)
                  }
                  className={`
                    w-full mt-4 flex items-center justify-center gap-2 rounded-xl px-5 py-3
                    text-sm font-bold text-white transition-all
                    ${items.length === 0 || isPurchasing || !username || (paymentMethod === "wallet" && !hasEnoughBalance)
                      ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                      : paymentMethod === "wallet"
                        ? 'bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40'
                        : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40'
                    }
                  `}
                >
                  {isPurchasing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      در حال پردازش...
                    </>
                  ) : purchaseSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      خرید موفق!
                    </>
                  ) : paymentMethod === "wallet" && !hasEnoughBalance ? (
                    <>
                      <Wallet className="w-4 h-4" />
                      شارژ کیف پول
                    </>
                  ) : (
                    <>
                      {paymentMethod === "wallet" ? (
                        <Wallet className="w-4 h-4" />
                      ) : (
                        <CreditCardIcon className="w-4 h-4" />
                      )}
                      پرداخت نهایی
                    </>
                  )}
                </button>

                {paymentMethod === "wallet" && !hasEnoughBalance && items.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs text-center text-amber-500 dark:text-amber-400 mb-2">
                      موجودی کیف پول شما کافی نیست. لطفاً کیف پول خود را شارژ کنید.
                    </p>
                    <button
                      onClick={() => setShowChargeModal(true)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-violet-700 dark:text-violet-300 border-2 border-violet-300 dark:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition"
                    >
                      <Plus className="w-4 h-4" />
                      شارژ کیف پول
                    </button>
                  </div>
                )}

                {!username && items.length > 0 && (
                  <p className="text-xs text-center text-amber-500 dark:text-amber-400 mt-2">
                    لطفاً نام کاربری خود را وارد کنید
                  </p>
                )}
              </div>

              {/* خلاصه سریع */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">تعداد آیتم‌ها</span>
                  <span className="font-bold text-gray-900 dark:text-white">{items.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-600 dark:text-gray-400">تحویل</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">کمتر از ۵ دقیقه</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-600 dark:text-gray-400">پشتیبانی</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">۲۴ ساعته</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== مودال‌ها (بدون تغییر) ===== */}
        <AnimatePresence>
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
                  برای تکمیل خرید، کیف پول خود را شارژ کنید
                </p>

                <div className="bg-violet-50 dark:bg-violet-950/20 rounded-xl p-3 mb-4 border border-violet-200 dark:border-violet-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">مبلغ مورد نیاز</span>
                    <span className="text-sm font-bold text-red-500">
                      {currency.format(total - walletBalance)} تومان
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">موجودی فعلی</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {currency.format(walletBalance)} تومان
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {chargeAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`
                        p-3 rounded-xl border-2 text-sm font-bold transition
                        ${selectedAmount === amount
                          ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300'
                          : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-violet-300 dark:hover:border-violet-700'
                        }
                      `}
                    >
                      {currency.format(amount)} تومان
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">مبلغ انتخابی:</span>
                  <span className="text-sm font-bold text-violet-700 dark:text-violet-400">
                    {currency.format(selectedAmount)} تومان
                  </span>
                </div>

                <button
                  onClick={handleCharge}
                  disabled={isCharging}
                  className={`
                    w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition
                    ${isCharging
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-500/25'
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
                      <CreditCardIcon className="w-4 h-4" />
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
        </AnimatePresence>

        {/* پیام موفقیت */}
        <AnimatePresence>
          {purchaseSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm bg-emerald-500 text-white rounded-2xl p-5 shadow-2xl border border-emerald-400"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">خرید موفق! 🎉</h4>
                  <p className="text-sm text-white/90">
                    به حساب {username} ارسال شد
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    کد: #{Math.random().toString(36).substring(2, 7).toUpperCase()}
                  </p>
                </div>
                <button
                  onClick={() => setPurchaseSuccess(false)}
                  className="text-white/70 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {insufficientFunds && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm bg-amber-500 text-white rounded-2xl p-4 shadow-2xl border border-amber-400"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">موجودی کافی نیست!</h4>
                  <p className="text-sm text-white/90">
                    لطفاً کیف پول خود را شارژ کنید
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}