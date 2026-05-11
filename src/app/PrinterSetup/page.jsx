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
    <>
      <div className="min-h-screen w-full text-white font-sans flex flex-col relative overflow-hidden">
        {/* Desktop Background */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg-img.png')",
          }}
        />

        {/* Mobile Background */}
        <div
          className="absolute inset-0 block md:hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg-mb.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1">
          <main className="flex-1 flex flex-col md:flex-row md:mt-20 w-full px-8 text-center">
            <div className="md:w-3/5 w-full mt-6 md:mt-0">
              <h1 className="text-4xl md:text-5xl md:text-left font-light mb-6">
                Set up your HP printer
              </h1>

              <p className="text-lg md:text-xl font-light md:text-left mb-10 max-w-3xl md:max-w-2xl opacity-90">
                Enter your HP product name and model number to get the right HP
                Smart software and drivers for you
              </p>

              {/* Input Group */}
              <form
                onSubmit={handleSubmit}
                className="w-full h-22 max-w-2xl flex flex-col md:flex-row gap-3 mb-12"
              >
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

            {/* Footer Text */}
          </main>
        </div>
      </div>
      <div className="mt-8 mx-4 md:mx-0 pb-10 space-y-4 text-center">
        <p className="text-sm md:text-base opacity-80 ">
          Install HP Smart software and drivers on each mobile device or
          computer that you want to print from. Add the printer on the new
          device.
        </p>
        <p className="text-sm md:text-base">
          Need additional help with set-up?{" "}
          <span className="underline cursor-pointer hover:text-gray-200">
            Chat with us
          </span>
        </p>
      </div>
    </>
  );
}

export default PrinterSetup;
