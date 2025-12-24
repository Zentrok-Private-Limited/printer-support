import { Mulish } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "@/components/footer";

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
    <html name="viewport" content="width=device-width, initial-scale=1" lang="en">
      <head>
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

      <body
        className={`${mulish.variable}} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
