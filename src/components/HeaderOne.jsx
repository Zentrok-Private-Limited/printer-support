"use client";

import React from "react";
import { Menu, Search, User, ShoppingCart } from "lucide-react";

function Header1() {
  return (
    <>
      {/* Main Header */}
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
                <a href="/">Home</a>
              </li>
              <li className="hover:text-[#004aad] cursor-pointer">
                <a href="/Printers">Printers</a>
              </li>
              <li className="hover:text-[#004aad] cursor-pointer">
                <a href="/PrinterSetupGuide">Printer Setup Guide</a>
              </li>
              <li className="hover:text-[#004aad] cursor-pointer">
                <a href="/About">About Us</a>
              </li>
              <li className="hover:text-[#004aad] cursor-pointer">
                <a href="/Disclaimer">Disclaimer</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header1;