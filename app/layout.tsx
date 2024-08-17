import type { Metadata } from "next";

import "./globals.css";

import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: " Next Dashboard",
  description: "Next Dashboard Crash Course",
};

  const vazirFont =  localFont({
  src : '../public/font/Vazirmatn-Regular.woff2'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${vazirFont.className}`}>
        <main className="p-5"  >
          {children}</main>
      </body>
    </html>
  );
}
