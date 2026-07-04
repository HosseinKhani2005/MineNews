import "./globals.css";
import { Providers } from "@/store/providers";
import ClientLayout from "@/components/ClientLayout"; 
import RecaptchaProvider from "@/components/RecaptchaProvider";

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
      <body
        className="min-h-screen bg-white dark:bg-black"
        suppressHydrationWarning
      >
        <Providers>
          <RecaptchaProvider>
            <ClientLayout>{children}</ClientLayout>
          </RecaptchaProvider>
        </Providers>
      </body>
    </html>
  );
}
