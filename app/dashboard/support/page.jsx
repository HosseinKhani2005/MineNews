"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Headphones,
  MessageSquareText,
  LifeBuoy,
  AlertCircle,
  CheckCircle,
  Clock,
  User,
  Paperclip,
  X,
  ChevronLeft,
  Shield,
  ThumbsUp,
  MessageCircle,
  FolderOpen,
  Plus,
  ArrowRight,
} from "lucide-react";

// تیکت‌های نمونه
const initialTickets = [
  {
    id: 1,
    title: "مشکل ورود به حساب",
    status: "در حال بررسی",
    date: "۱۴۰۳/۰۴/۱۵",
    messages: [
      { id: 1, author: "پشتیبانی", text: "سلام 👋 لطفاً مشکل خود را توضیح دهید.", time: "۱۰:۳۰", isSupport: true },
      { id: 2, author: "حسین", text: "نمی‌توانم وارد حساب کاربری خود شوم.", time: "۱۰:۳۲", isSupport: false },
      { id: 3, author: "پشتیبانی", text: "در حال بررسی هستیم. لطفاً صبر کنید.", time: "۱۰:۳۵", isSupport: true },
    ],
  },
  {
    id: 2,
    title: "اختلال در پرداخت",
    status: "پاسخ داده شد",
    date: "۱۴۰۳/۰۴/۱۴",
    messages: [
      { id: 1, author: "پشتیبانی", text: "سلام، مشکل پرداخت را بررسی می‌کنیم.", time: "۰۹:۰۰", isSupport: true },
      { id: 2, author: "حسین", text: "درگاه پرداخت خطا می‌دهد.", time: "۰۹:۱۵", isSupport: false },
      { id: 3, author: "پشتیبانی", text: "مشکل برطرف شد. دوباره امتحان کنید.", time: "۰۹:۳۰", isSupport: true },
    ],
  },
  {
    id: 3,
    title: "سوال درباره سفارش",
    status: "بسته شد",
    date: "۱۴۰۳/۰۴/۱۳",
    messages: [
      { id: 1, author: "پشتیبانی", text: "سلام، چگونه می‌توانم کمک کنم؟", time: "۱۴:۰۰", isSupport: true },
      { id: 2, author: "حسین", text: "سفارش من کی ارسال می‌شود؟", time: "۱۴:۰۵", isSupport: false },
      { id: 3, author: "پشتیبانی", text: "سفارش شما ارسال شده است.", time: "۱۴:۱۰", isSupport: true },
    ],
  },
];

const quickIssues = [
  { label: "مشکل ورود به حساب", icon: User },
  { label: "اختلال در پرداخت", icon: Shield },
  { label: "سوال درباره سفارش", icon: MessageCircle },
  { label: "گزارش باگ یا خطا", icon: AlertCircle },
];

export default function SupportPage() {
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  // ثبت تیکت جدید
  const handleSubmit = () => {
    if (!ticketSubject || !ticketMessage) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const newTicket = {
        id: tickets.length + 1,
        title: ticketSubject,
        status: "در حال بررسی",
        date: new Date().toLocaleDateString('fa-IR'),
        messages: [
          { id: 1, author: "حسین", text: ticketMessage, time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }), isSupport: false },
          { id: 2, author: "پشتیبانی", text: "تیکت شما ثبت شد. به زودی بررسی می‌شود.", time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }), isSupport: true },
        ],
      };
      setTickets([newTicket, ...tickets]);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setTicketSubject("");
      setTicketMessage("");
      setSelectedIssue(null);
      setShowNewTicket(false);
    }, 1500);
  };

  // ارسال پیام در تیکت
  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return;
    
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        return {
          ...ticket,
          messages: [
            ...ticket.messages,
            {
              id: ticket.messages.length + 1,
              author: "حسین",
              text: newMessage,
              time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
              isSupport: false,
            },
          ],
        };
      }
      return ticket;
    });
    setTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id));
    setNewMessage("");

    // پاسخ خودکار
    setTimeout(() => {
      const updatedWithReply = updatedTickets.map(ticket => {
        if (ticket.id === selectedTicket.id) {
          return {
            ...ticket,
            messages: [
              ...ticket.messages,
              {
                id: ticket.messages.length + 2,
                author: "پشتیبانی",
                text: "در حال بررسی درخواست شما هستم... 🔍",
                time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
                isSupport: true,
              },
            ],
          };
        }
        return ticket;
      });
      setTickets(updatedWithReply);
      setSelectedTicket(updatedWithReply.find(t => t.id === selectedTicket.id));
    }, 1000);
  };

  // باز کردن تیکت
  const openTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  // برگشت به لیست تیکت‌ها
  const backToTickets = () => {
    setSelectedTicket(null);
  };

  // وضعیت تیکت
  const getStatusColor = (status) => {
    switch(status) {
      case "در حال بررسی": return "text-yellow-600 bg-yellow-50 dark:bg-yellow-950/30 dark:text-yellow-400";
      case "پاسخ داده شد": return "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400";
      case "بسته شد": return "text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400";
      default: return "text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== هدر ===== */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              🎧 پشتیبانی
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              تیم پشتیبانی ۲۴ ساعته آماده پاسخگویی به شماست
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNewTicket(!showNewTicket)}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              تیکت جدید
            </button>
            <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                زمان پاسخ: کمتر از ۱۰ دقیقه
              </span>
            </div>
          </div>
        </div>

        {/* ===== فرم ثبت تیکت جدید ===== */}
        <AnimatePresence>
          {showNewTicket && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                        ثبت تیکت جدید
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        مشکل خود را انتخاب کنید
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowNewTicket(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* دکمه‌های مشکلات */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {quickIssues.map((issue) => {
                    const Icon = issue.icon;
                    const isSelected = selectedIssue === issue.label;
                    return (
                      <button
                        key={issue.label}
                        onClick={() => setSelectedIssue(issue.label)}
                        className={`
                          flex items-center gap-2.5 p-3 rounded-xl text-sm font-medium transition-all duration-200
                          ${isSelected 
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500 text-emerald-700 dark:text-emerald-300' 
                            : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }
                        `}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-500' : 'text-gray-400'}`} />
                        <span className="text-xs">{issue.label}</span>
                        {isSelected && <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-auto" />}
                      </button>
                    );
                  })}
                </div>

                {/* فرم */}
                <div className="mt-5 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      موضوع تیکت
                    </label>
                    <input
                      type="text"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="موضوع را وارد کنید..."
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      شرح مشکل
                    </label>
                    <textarea
                      rows="3"
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      placeholder="مشکل خود را به طور کامل توضیح دهید..."
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      <Paperclip className="w-4 h-4 inline ml-1" />
                      پیوست فایل (اختیاری)
                    </label>
                    <input
                      type="file"
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 transition"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!ticketSubject || !ticketMessage || isSubmitting}
                  className={`
                    w-full mt-5 flex items-center justify-center gap-2 rounded-xl px-5 py-3
                    text-sm font-bold text-white transition-all
                    ${!ticketSubject || !ticketMessage || isSubmitting
                      ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      در حال ارسال...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      تیکت ارسال شد ✅
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      ارسال تیکت
                    </>
                  )}
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-emerald-600 dark:text-emerald-400 text-center mt-2"
                  >
                    تیکت شما با موفقیت ثبت شد. به زودی پاسخ داده می‌شود.
                  </motion.p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== لیست تیکت‌ها یا نمایش تیکت ===== */}
        {selectedTicket ? (
          // ===== نمایش تیکت باز شده =====
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col">
            {/* هدر تیکت */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={backToTickets}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-500" />
                  </button>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {selectedTicket.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(selectedTicket.status)}`}>
                        {selectedTicket.status}
                      </span>
                      <span className="text-xs text-gray-400">{selectedTicket.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <LifeBuoy className="w-3.5 h-3.5" />
                  <span>پاسخ سریع</span>
                </div>
              </div>
            </div>

            {/* پیام‌ها */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-100 min-h-75">
              <AnimatePresence>
                {selectedTicket.messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.isSupport ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`
                        max-w-[85%] rounded-2xl px-4 py-3
                        ${msg.isSupport 
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200' 
                          : 'bg-emerald-500 text-white'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold ${msg.isSupport ? 'text-gray-500 dark:text-gray-400' : 'text-white/80'}`}>
                          {msg.author}
                        </span>
                        <span className={`text-[10px] ${msg.isSupport ? 'text-gray-400' : 'text-white/60'}`}>
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ورودی پیام */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="پیام خود را بنویسید..."
                  className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className={`
                    flex items-center justify-center w-11 h-11 rounded-xl transition
                    ${newMessage.trim() 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // ===== لیست تیکت‌ها =====
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-emerald-500" />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  تیکت‌های من
                </h2>
              </div>
              <span className="text-sm text-gray-500">{tickets.length} تیکت</span>
            </div>

            {tickets.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <MessageSquareText className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">هیچ تیکتی ثبت نشده است</p>
                <button
                  onClick={() => setShowNewTicket(true)}
                  className="mt-3 text-emerald-600 hover:text-emerald-700 text-sm font-semibold"
                >
                  ثبت تیکت جدید
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {tickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    onClick={() => openTicket(ticket)}
                    className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition text-right"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                          {ticket.title}
                        </h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-400">{ticket.date}</span>
                        <span className="text-xs text-gray-400">
                          {ticket.messages.length} پیام
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 shrink-0 mr-3" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===== بخش اطلاعات اضافی ===== */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">پاسخ سریع</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">کمتر از ۱۰ دقیقه</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">امنیت بالا</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">اطلاعات محفوظ</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">رضایت کاربران</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">۹۸٪ رضایت</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}