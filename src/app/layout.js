import { Mulish } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata = {
  title: "Printer Drivers Support",
  description: "Printer Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Ads Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17693950882"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17693950882');
          `}
        </Script>
      </head>

      <body className={`${mulish.variable} antialiased`}>
        <HeaderOne />
        {children}
        <FooterOne />
      </body>
    </html>
  );
}