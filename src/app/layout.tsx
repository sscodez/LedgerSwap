import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ModalProvider } from "@/components/modal/ModalContext";
import ModalContainer from "@/components/modal/ModalContainer";
import ReduxProvider from "@/store/Providers";
import { headers } from 'next/headers' // added
import ContextProvider from '@/provider/web3provider'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ledger Swap",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie')
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ContextProvider cookies={cookies}>
        <ReduxProvider>
          <ModalProvider>
            <Header />
            {children}
            <Footer />
            <ModalContainer />
          </ModalProvider>
        </ReduxProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
