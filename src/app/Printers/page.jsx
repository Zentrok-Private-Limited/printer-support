"use client"
import React, { useState } from "react";
import {Star, Search } from "lucide-react";
import { Menu, User, ShoppingCart } from "lucide-react";
import Link from "next/link"

const products = [
  { id: 1, name: "Brother DCP-T420W All-in-One Ink Tank", price: "14,999.00", oldPrice: "16,990.00", image: "/printers/Brother_T420W.webp" },
  { id: 2, name: "Epson EcoTank L3250 Wi-Fi All-in-One", price: "15,499.00", oldPrice: "17,999.00", image: "/printers/Epson_L3250.jpg" },
  { id: 3, name: "HP Smart Tank 580 All-in-One Wireless", price: "15,447.00", oldPrice: "18,848.00", image: "/printers/HP_580.avif" },
  { id: 4, name: "Canon PIXMA G3012 Wireless All-in-One", price: "13,999.00", oldPrice: "15,500.00", image: "/printers/PIXMA_G3012.png" },
  { id: 5, name: "Brother HL-L2321D Single Function Laser", price: "10,890.00", oldPrice: "12,500.00", image: "/printers/Brother_HL-L2321D.webp" },
  { id: 6, name: "Epson EcoTank L3210 All-in-One Ink Tank", price: "12,299.00", oldPrice: "14,999.00", image: "/printers/Epson_L3210.jpg" },
  { id: 7, name: "HP LaserJet M1005 Multi-function Laser", price: "17,000.00", oldPrice: "21,500.00", image: "/printers/HP_LaserJet_M1005.avif" },
  { id: 8, name: "Canon PIXMA G2012 Multi-Function USB", price: "12,450.00", oldPrice: "14,200.00", image: "/printers/Canon_PIXMA_G2012.png" },
  { id: 10, name: "Epson EcoTank L130 Single Function Ink", price: "9,999.00", oldPrice: "11,500.00", image: "/printers/Epson_L130.png" },
  { id: 11, name: "HP Laserjet Pro M126nw Wireless Multi", price: "21,450.00", oldPrice: "24,000.00", image: "printers/HP_Laserjet_Pro.avif" },
  { id: 12, name: "Canon PIXMA G3730 MegaTank Wireless", price: "16,250.00", oldPrice: "18,900.00", image: "/printers/PIXMA_G3730.jpg" }
];

export default function PrinterStore() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
    <header className="bg-white border-b sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
                  
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <Menu className="lg:hidden w-6 h-6 cursor-pointer" />
                    <div className="flex flex-col leading-tight">
                      <span className="text-2xl font-black text-[#004aad] tracking-tighter uppercase italic">
                        Printer Drivers Support
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase ml-1">
                        Pro Digital Services
                      </span>
                    </div>
                  </div>
        
                  {/* Search Bar */}
                  <div className="flex-1 max-w-xl hidden md:flex border rounded-md overflow-hidden bg-gray-50">
                    <input
                      type="text"
                      placeholder="Search for printers, ink, cartridges..."
                      className="flex-grow px-4 py-2 outline-none bg-transparent text-sm"
                    />
                    <button className="bg-[#004aad] px-5 flex items-center justify-center text-white">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
        
                  {/* Icons */}
                  <div className="flex items-center gap-6">
                    <div className="hidden lg:flex flex-col text-right">
                      <span className="text-[10px] text-gray-400 font-bold uppercase">
                        Call Us Now
                      </span>
                      <span className="text-sm font-bold text-[#004aad]">
                        1-877-685-2233
                      </span>
                    </div>
        
                    <div className="relative cursor-pointer group">
                      <User className="w-6 h-6 group-hover:text-[#004aad]" />
                    </div>
        
                    <div className="relative cursor-pointer group">
                      <ShoppingCart className="w-6 h-6 group-hover:text-[#004aad]" />
                      <span className="absolute -top-2 -right-2 bg-[#ff4d4d] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                        0
                      </span>
                    </div>
                  </div>
                </div>
        
                {/* Navigation */}
                <nav className="bg-white border-t hidden lg:block">
                  <div className="container mx-auto px-4">
                    <ul className="flex gap-10 text-[13px] font-bold uppercase tracking-wide py-3">
                      <li className="text-[#004aad] cursor-pointer">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="hover:text-[#004aad] cursor-pointer">
                        <Link href="/Printers">Printers</Link>
                      </li>
                      <li className="hover:text-[#004aad] cursor-pointer">
                        <Link href="/PrinterSetupGuide">Printer Setup Guide</Link>
                      </li>
                      <li className="hover:text-[#004aad] cursor-pointer">
                        <Link href="/About">About Us</Link>
                      </li>
                      <li className="hover:text-[#004aad] cursor-pointer">
                        <Link href="/Disclaimer">Disclaimer</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>

      <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Banner */}
      <div className="bg-[#007DBA] py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Premium Printer Collection</h1>
        <p className="text-blue-100">Find the perfect printer for your home or office</p>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative group p-6 aspect-square flex items-center justify-center bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {product.oldPrice && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                    Sale
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">(120+)</span>
                </div>
                
                <h3 className="text-gray-800 font-semibold text-sm line-clamp-2 mb-3 h-10">
                  {product.name}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">₹{product.oldPrice}</span>
                    )}
                  </div>

                  <button 
                    onClick={addToCart}
                    className="w-full bg-[#007DBA] hover:bg-[#006699] text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 transform"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      
    </div>
    </>
  );
}