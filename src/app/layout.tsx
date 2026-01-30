import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import { SelectionProvider } from "@/providers/SelectionContext";
import { Header } from "@/components/layout/Header";

const svnGilroy = localFont({
  src: [
    {
      path: "./fonts/SVN-Gilroy/SVN-Gilroy-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SVN-Gilroy/SVN-Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SVN-Gilroy/SVN-Gilroy-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SVN-Gilroy/SVN-Gilroy-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-svn-gilroy",
});

export const metadata: Metadata = {
  title: "Khảo sát ý kiến khách hàng - Xây dựng bởi thientt@phuongchau.com",
  description:
    "Khảo sát ý kiến khách hàng - Xây dựng bởi thientt@phuongchau.com",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${svnGilroy.variable} antialiased`}>
        <SelectionProvider>
          <QueryProvider>
            <div className="w-full min-h-[100dvh] relative bg-white flex flex-col items-center selection:bg-primary/20">
              <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#a54687_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
              <div className="w-full relative z-10 flex-col flex h-[100dvh]">
                <Header />
                <main className="w-full h-full flex-1 flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 overflow-hidden">
                  <div className="w-full max-w-screen-xl h-full flex flex-col relative z-20">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </QueryProvider>
        </SelectionProvider>
        <Toaster richColors position="top-center" duration={3000} closeButton />
      </body>
    </html>
  );
}
