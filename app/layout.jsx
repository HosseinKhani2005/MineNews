// app/layout.js
import "./globals.css";
import { Providers } from "@/store/providers";
import ClientLayout from "@/components/ClientLayout"; // ← ایمپورت کامپوننت کلاینت

export const metadata = {
  title: "MineNews",
  description: "Latest Minecraft news, updates, guides and tutorials.",
  icons: {
    icon: "/images/iconimage.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-white dark:bg-black">
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
