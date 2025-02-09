import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phương Châu Hospital - Patient Survey",
  description: "Development by zubu team",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <div className="w-full h-screen relative bg-amber-300" style={{}}>
            <BackgroundGradientAnimation />
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="max-w-7xl max-h-screen  px-6">{children}</div>
            </div>
          </div>
        </QueryProvider>
        <Toaster richColors position="top-center" duration={3000} closeButton />
      </body>
    </html>
  );
}
