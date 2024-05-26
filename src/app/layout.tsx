"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "../components/SideNav";
import { ReactQueryProvider } from "../QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${inter.className} flex`}>
          <SideNav />
          <Suspense
            fallback={
              <div className="flex justify-center">
                Loading... suspense version
              </div>
            }
          >
            <div className="w-full text-white flex justify-center px-10 py-10">
              {children}
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
          </Suspense>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
