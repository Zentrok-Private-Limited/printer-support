"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

function PrinterSetup() {
  const images = ["/NSLaser.avif", "/Envy.avif", "/Deskjet.avif"];
  const [index, setIndex] = useState(0);
  const [printerInput, setPrinterInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (printerInput.trim()) {
      router.push("/InstallHPSmart");
    }
  };

  return (
    // Main Container with HP Blue Gradient
    <div className="md:min-h-screen w-full bg-gradient-to-b from-[#007DBA] to-[#0096D6] text-white flex flex-col items-center font-sans">
      
      {/* Header / Logo Area */}
      <div className="bg-white w-full flex justify-start py-2 px-4">
        <div className="bg-[#007DBA] rounded-full w-16 h-16 flex items-center justify-center">
           <img src="hp-icon.png" alt="logo" />
        </div>
      </div>

      {/* Main Content Card */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center w-full px-6 text-center">
        
        <div className="md:w-3/5 w-full mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl md:text-left font-light mb-6">
          Set up your HP printer
        </h1>
        
        <p className="text-lg md:text-xl font-light md:text-left mb-10 max-w-3xl md:max-w-2xl opacity-90">
          Enter your HP product name and model number to get the right HP Smart software and drivers for you
        </p>

        {/* Input Group */}
        <form onSubmit={handleSubmit} className="w-full h-22 max-w-2xl flex flex-col md:flex-row gap-3 mb-12">
          <input
            type="text"
            value={printerInput}
            onChange={(e) => setPrinterInput(e.target.value)}
            placeholder="Enter exact model number or name. Ex: 'ENVY 452'"
            className="flex-1 h-14 rounded-md px-6 text-black bg-white text-lg outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            disabled={!printerInput.trim()}
            className={`h-10 md:h-14 px-10 rounded-md text-lg font-medium transition-all ${
              printerInput.trim() 
              ? "bg-white text-[#007DBA] hover:bg-gray-100" 
              : "bg-white/40 text-white cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </form>
        </div>

        {/* Dynamic Image Display (Responsive Laptop/Mobile Graphic) */}
        <div className="relative w-2/5 flex justify-center items-end ">
          <div className="relative w-full max-w-[600px] aspect-video">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                {/* Simplified placeholder for the composite image in your reference */}
                <Image
                  src={images[index]}
                  alt="HP Device Setup"
                  width={500}
                  height={350}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Text */}
        
      </main>
      <div className="mt-8 mx-4 md:mx-0 pb-10 space-y-4 text-center">
            <p className="text-sm md:text-base opacity-80 ">
              Install HP Smart software and drivers on each mobile device or computer that you want to print from. Add the printer on the new device.
            </p>
            <p className="text-sm md:text-base">
              Need additional help with set-up? <span className="underline cursor-pointer hover:text-gray-200">Chat with us</span>
            </p>
        </div>
    </div>
  );
}

export default PrinterSetup;