import Image from "next/image";
import "./globals.css";
import { Providers } from "@/store/providers";

export const metadata = {
  title: "MineNews",
  description: "Latest Minecraft news, updates, guides and tutorials.",
  icons: {
    icon: "/images/iconimage.webp",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" data-theme="light" dir="rtl">
      <body
        className="min-h-screen bg-white dark:bg-black"
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 h-lvh">
          <Image
            src="/images/background_image.avif"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
