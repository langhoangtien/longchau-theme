import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import { CartProvider } from "@/components/cart";
import { Toaster } from "@/components/ui/sonner";
import { SheetProvider } from "@/components/sheet-product";
import dynamic from "next/dynamic";
import { AddToCartDialog } from "@/components/home/";
import { ProgressBar } from "@/components/progress-bar";
const DialogProduct = dynamic(
  () => import("@/components/home/").then((mod) => mod.DialogProduct),
  { ssr: false }
);
const SheetProduct = dynamic(
  () => import("@/components/home/").then((mod) => mod.SheetProduct),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Ludmila - Hàng chính hãng từ Nga",
  description:
    "Ludmila - Hàng chính hãng từ Nga. Chuyên cung cấp các sản phẩm chăm sóc da, mỹ phẩm, thực phẩm chức năng từ Nga.",
  keywords:
    "Nga, Ludmila, mỹ phẩm, thực phẩm chức năng, chăm sóc da, hàng chính hãng",

  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="viewport" content="minimum-scale=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      ></meta>

      <body>
        <ProgressBar />
        <CartProvider>
          <SheetProvider>
            {children}
            <SheetProduct />
            <DialogProduct />
          </SheetProvider>
          <AddToCartDialog />
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
