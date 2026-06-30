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
        className="min-h-screen bg-white dark:bg-black"
        suppressHydrationWarning
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
