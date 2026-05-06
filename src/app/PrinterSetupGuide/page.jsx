import React from "react";
import { ChevronRight, Printer, Wifi, Download, CheckCircle } from "lucide-react";

export default function PrinterSetupGuide() {
  const steps = [
    {
      id: "01",
      title: "Unpack & Power On",
      icon: <Printer className="w-6 h-6" />,
      content: "Remove all protective tapes and packing materials from the outside and inside of the printer. Connect the power cord, plug it into an outlet, and turn the printer on.",
      tips: ["Check inside the ink cartridge access area for hidden cardboard.", "Ensure the printer is on a flat, stable surface."]
    },
    {
      id: "02",
      title: "Install Cartridges & Paper",
      icon: <CheckCircle className="w-6 h-6" />,
      content: "Open the cartridge access door and insert the setup ink cartridges that came in the box. Load plain white paper into the input tray and adjust the paper width guides.",
      tips: ["Wait for the printer to align the cartridges.", "Do not force the cartridges; they should click into place."]
    },
    {
      id: "03",
      title: "Connect to Network",
      icon: <Wifi className="w-6 h-6" />,
      content: "For wireless setup, use the printer control panel to find the 'Wireless Setup Wizard' or press the Wi-Fi button. For wired, connect an Ethernet cable to your router.",
      tips: ["Keep your Wi-Fi password handy.", "Ensure your PC and printer are on the same 2.4GHz or 5GHz band."]
    },
    {
      id: "04",
      title: "Download Drivers",
      icon: <Download className="w-6 h-6" />,
      content: "Visit our driver section or the official manufacturer site to download the software package. This ensures your computer can communicate effectively with the hardware.",
      tips: ["Choose the 'Full Feature' software for scanning capabilities.", "Restart your PC after the installation completes."]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      {/* Hero Header */}
      <div className="bg-[#007DBA] pt-16 pb-24 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Complete Printer Setup Guide</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Follow our expert-verified steps to get your printer from the box to your first printout in less than 10 minutes.
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-5xl mx-auto px-6 -mt-12">
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-100">
              {/* Step Number Sidebar */}
              <div className="bg-gray-800 md:w-24 flex items-center justify-center p-6 md:p-0">
                <span className="text-3xl font-black text-[#007DBA]">{step.id}</span>
              </div>

              {/* Step Content */}
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 text-[#007DBA] rounded-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.content}
                </p>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-[#007DBA] uppercase tracking-wider mb-2">Pro Tips:</h4>
                  <ul className="space-y-1">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-[#007DBA] flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting Link Section */}
      <div className="max-w-3xl mx-auto mt-20 px-6">
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Still Stuck?</h2>
          <p className="text-gray-500 mb-6">
            If your printer isn't being detected or you're seeing an error code during step 4, visit our specialized installation repair page.
          </p>
          <button className="bg-[#007DBA] hover:bg-[#006699] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-200">
            Fix Installation Errors
          </button>
        </div>
      </div>
    </div>
  );
}