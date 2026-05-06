import React from 'react';
import { ShoppingCart, Search, User, Menu, Star, Heart } from 'lucide-react';

const LandingPage = () => {
  const products = [
  { id: 1, name: "Brother DCP-T420W All-in-One Ink Tank", price: "14,999.00", oldPrice: "16,990.00", image: "/printers/Brother_T420W.webp" },
  { id: 2, name: "Epson EcoTank L3250 Wi-Fi All-in-One", price: "15,499.00", oldPrice: "17,999.00", image: "/printers/Epson_L3250.jpg" },
  { id: 3, name: "HP Smart Tank 580 All-in-One Wireless", price: "15,447.00", oldPrice: "18,848.00", image: "/printers/HP_580.avif" },
  { id: 4, name: "Canon PIXMA G3012 Wireless All-in-One", price: "13,999.00", oldPrice: "15,500.00", image: "/printers/PIXMA_G3012.png" },
  { id: 5, name: "Brother HL-L2321D Single Function Laser", price: "10,890.00", oldPrice: "12,500.00", image: "/printers/Brother_HL-L2321D.webp" },
  { id: 6, name: "Epson EcoTank L3210 All-in-One Ink Tank", price: "12,299.00", oldPrice: "14,999.00", image: "/printers/Epson_L3210.jpg" },
  { id: 7, name: "HP LaserJet M1005 Multi-function Laser", price: "17,000.00", oldPrice: "21,500.00", image: "/printers/HP_LaserJet_M1005.avif" },
  { id: 8, name: "Canon PIXMA G2012 Multi-Function USB", price: "12,450.00", oldPrice: "14,200.00", image: "/printers/Canon_PIXMA_G2012.png" },
  { id: 9, name: "Brother DCP-T820DW Auto-Duplex Wi-Fi", price: "19,450.00", oldPrice: "22,990.00", image: "/printers/DCP-T820DW.webp" },
  { id: 10, name: "Epson EcoTank L130 Single Function Ink", price: "9,999.00", oldPrice: "11,500.00", image: "/printers/Epson_L130.png" },
  { id: 11, name: "HP Laserjet Pro M126nw Wireless Multi", price: "21,450.00", oldPrice: "24,000.00", image: "printers/HP_Laserjet_Pro.avif" },
  { id: 12, name: "Canon PIXMA G3730 MegaTank Wireless", price: "16,250.00", oldPrice: "18,900.00", image: "/printers/PIXMA_G3730.jpg" }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#333]">
      {/* Top Utility Bar */}
      {/* <div className="bg-[#004aad] text-white text-[12px] py-2 px-4 text-center">
        Free Shipping on all orders above ₹5000!
      </div> */}

      {/* Main Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Menu className="lg:hidden w-6 h-6 cursor-pointer" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black text-[#004aad] tracking-tighter uppercase italic">Printer Drivers Support</span>
              <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase ml-1">Pro Digital Services</span>
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
              <span className="text-[10px] text-gray-400 font-bold uppercase">Call Us Now</span>
              <span className="text-sm font-bold text-[#004aad]">1-877-685-2233</span>
            </div>
            <div className="relative cursor-pointer group">
              <User className="w-6 h-6 group-hover:text-[#004aad]" />
            </div>
            <div className="relative cursor-pointer group">
              <ShoppingCart className="w-6 h-6 group-hover:text-[#004aad]" />
              <span className="absolute -top-2 -right-2 bg-[#ff4d4d] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
            </div>
          </div>
        </div>

        {/* Navigation Link Bar */}
        <nav className="bg-white border-t hidden lg:block">
          <div className="container mx-auto px-4">
            <ul className="flex gap-10 text-[13px] font-bold uppercase tracking-wide py-3">
              <li className="text-[#004aad] cursor-pointer">Home</li>
              <li className="hover:text-[#004aad] cursor-pointer">Printers</li>
              <li className="hover:text-[#004aad] cursor-pointer">
                <a href="/Printer-setup">
                  xyz
                </a>
              </li>
              <li className="hover:text-[#004aad] cursor-pointer">About Us</li>
              <li className="hover:text-[#004aad] cursor-pointer">
                <a href="/Disclaimer">
                    Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Banner / Promotion */}
      <div className="w-full h-[400px] bg-gradient-to-r from-blue-100 to-blue-50 flex items-center">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded mb-4 inline-block">SUMMER SALE 20% OFF</span>
            <h2 className="text-5xl font-extrabold text-[#111] mb-6 leading-tight">High-Performance <br/><span className="text-[#004aad]">Office Printers</span></h2>
            <p className="text-gray-600 mb-8 max-w-md">Upgrade your workflow with our premium selection of Brother and HP printers. Reliable, fast, and cost-effective.</p>
            <button className="bg-[#004aad] text-white px-8 py-4 rounded-md font-bold shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-1">
              Shop Now
            </button>
          </div>
          <div className="hidden md:flex justify-center items-center">
            {/* Illustration/Image Placeholder */}
            <div className="w-150 h-100">
               <img src="/hero.png" alt="Hero" className='contain' />
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-[#111]">Featured Products</h3>
            <div className="h-1 w-20 bg-[#004aad] mt-2"></div>
          </div>
          {/* <div className="flex gap-4">
             <span className="text-sm font-bold text-[#004aad] border-b-2 border-[#004aad] cursor-pointer">New Arrivals</span>
             <span className="text-sm font-bold text-gray-400 hover:text-[#004aad] cursor-pointer">Best Sellers</span>
          </div> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group relative">
              {/* Overlay Action Buttons */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all flex flex-col gap-2 translate-x-4 group-hover:translate-x-0">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#004aad] hover:text-white transition"><Heart className="w-4 h-4" /></button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#004aad] hover:text-white transition"><Search className="w-4 h-4" /></button>
              </div>

              <div className="aspect-square bg-[#fcfcfc] flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-contain w-full h-full group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 border-t border-gray-50">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <h4 className="text-[14px] font-bold mb-3 h-10 line-clamp-2 leading-tight group-hover:text-[#004aad] transition">
                  {product.name}
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#004aad] font-black text-lg">₹{product.price}</span>
                  <span className="text-gray-400 line-through text-xs italic font-medium">₹{product.oldPrice}</span>
                </div>
                <button className="w-full border-2 border-[#004aad] text-[#004aad] py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-[#004aad] hover:text-white transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-3 h-3" /> Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    
    </div>
  );
};

export default LandingPage;