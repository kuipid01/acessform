import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { FormContext, FormProvider } from "@/context/formContext";
import Nav from "@/components/nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AccessForms",
  description: "Your easy to use form builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
