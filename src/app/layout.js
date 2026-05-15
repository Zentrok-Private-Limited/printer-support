import { Mulish } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { CartProvider } from "../app/context/CartContext";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Printer Drivers Support | Setup, Installation & Troubleshooting",
    template: "%s | Printer Drivers Support",
  },

  description:
    "Get expert help for printer driver installation, wireless printer setup, offline printer issues, scanning problems, and troubleshooting for HP, Canon, Epson, and Brother printers.",

  keywords: [
    "printer driver support",
    "printer setup",
    "printer troubleshooting",
    "HP printer support",
    "Canon printer setup",
    "Brother printer help",
    "Epson printer troubleshooting",
    "wireless printer setup",
    "printer offline fix",
    "printer driver installation",
  ],

  alternates: {
    canonical: "https://www.printerdriverssupport.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Printer Drivers Support",
    description:
      "Printer setup, driver installation, troubleshooting, and wireless printer support.",
    url: "https://www.printerdriverssupport.com/",
    siteName: "Printer Drivers Support",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Printer Drivers Support",
    description:
      "Printer setup and troubleshooting support for HP, Canon, Epson, and Brother printers.",
  },
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
          src="https://www.googletagmanager.com/gtag/js?id=AW-18146439939"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18146439939');
          `}
        </Script>
      </head>

      <body className={`${mulish.variable} antialiased`}>
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}