import React from "react";
import { Menu, Search, User, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
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
          
    <div className="min-h-screen bg-[#e6e7e8] font-sans">
      {/* Hero Section */}
      <div className="bg-[#007DBA] py-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Your Trusted Partner in Printing</h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          We bridge the gap between complex hardware and seamless productivity. 
          Expert setup, driver solutions, and troubleshooting—all in one place.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded by a team of certified hardware technicians, <strong>PrinterSupport</strong> was 
              created to solve the most common frustration in the modern office: the dreaded printer error.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a home office user trying to connect a new wireless inkjet or a large 
              enterprise managing a fleet of LaserJet Pro machines, we provide the technical 
              resources and direct driver access you need to keep working without interruption.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <img 
                src="/tech-support.jpg" 
                alt="Printer Technology" 
                className="rounded-lg"
              />
            </div>
            
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#007DBA]">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Solutions</h3>
            <p className="text-gray-600 text-sm">
              We know your time is valuable. Our automated driver delivery system gets you back to printing in minutes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#007DBA]">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Verified Drivers</h3>
            <p className="text-gray-600 text-sm">
              All software links are scanned and verified to be safe, original, and compatible with your specific OS.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#007DBA]">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">
              Our live chat team consists of real technicians, not bots, ready to solve error codes like 0x00000709.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 py-12 px-6 text-center text-white mb-20 mx-6 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Still having trouble with your installation?</h2>
        <p className="mb-8 text-gray-400">Our technicians are available 24/7 to assist with remote setup.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#007DBA] hover:bg-[#006699] px-8 py-3 rounded-full font-bold transition-all">
            Start Live Chat
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full font-bold transition-all">
            View Troubleshooting Guide
          </button>
        </div>
      </div>
    </div>
   </>
  );
}