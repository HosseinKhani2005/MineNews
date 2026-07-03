"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "@/store/userSlice";

export const metadata = {
  title: "MineNews",
  description: "Latest Minecraft news, updates, guides and tutorials.",
  icons: {
    icon: "/images/iconimage.webp",
  },
};
export default function RootClientLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <>
      <div className="fixed inset-0 -z-10 h-lvh">
        <Image
          src="/images/background_image.avif"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>

      <main>{children}</main>
    </>
  );
}
