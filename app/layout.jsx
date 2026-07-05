import "./globals.css";
import { Providers } from "@/store/providers";
import ClientLayout from "@/components/ClientLayout";
import RecaptchaProvider from "@/components/RecaptchaProvider";
import { Toaster } from "react-hot-toast";
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
            <ClientLayout>
              {children}
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: "#333",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    fontSize: "14px",
                  },
                  success: {
                    style: {
                      background: "#10b981",
                      color: "#fff",
                    },
                    iconTheme: {
                      primary: "#fff",
                      secondary: "#10b981",
                    },
                  },
                  error: {
                    style: {
                      background: "#ef4444",
                      color: "#fff",
                    },
                  },
                }}
              />
            </ClientLayout>
          </RecaptchaProvider>
        </Providers>
      </body>
    </html>
  );
}
