import Image from "next/image";
import "./globals.css";
import { Providers } from "@/store/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" data-theme="light" dir="rtl">
      <head>
        <link rel="icon" href="/images/iconimage.png" type="image/png" />
      </head>
      <body
        className="relative min-h-screen flex flex-col bg-white dark:bg-black"
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 will-change-transform">
          <Image
            src="/images/background_image.png"
            alt="Background"
            fill
            className="object-cover opacity-20 dark:opacity-30"
            priority
            sizes="100vw"
            quality={80}
          />
        </div>

        <Providers>
          <main className="flex-1 relative z-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}