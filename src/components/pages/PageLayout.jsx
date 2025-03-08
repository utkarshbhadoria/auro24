import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Plus } from "lucide-react"; // Import Plus icon

const PageLayout = ({ children, title, subtitle, description }) => {

    const[isOpen , setIsOpen] = useState(false);
    const[dialogContent, setDialogContent] = useState("");





  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="self-start" />

      {/* Parent Container - Left Aligned */}
      <div className="w-full flex flex-col flex-1 gap-4 p-6 h-screen">
        
        {/* Title Section - No Shadow, Blended Background */}
        <div className="bg-gray-100 w-[80%] mx-auto">
          <h4 className="text-lg font-bold mb-2 text-cyan-700 text-left">{title}</h4>
          {subtitle && <h2 className="text-xl font-bold mb-2 text-left">{subtitle}</h2>}

          {/* Description & Buttons Row */}
          <div className="flex justify-between items-center mt-2">
            {/* Left - Description (70% width) */}
            <p className="text-gray-700 w-[70%] text-left">{description}</p>

            {/* Right - Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-transparent hover:bg-cyan-700 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded whitespace-nowrap">
                <Plus size={16} /> Create Device Group
              </button>
              <button className="flex items-center gap-2 bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded whitespace-nowrap">
                <Plus size={16} /> New Device Profile
              </button>
            </div>
          </div>
        </div>

        {/* Content Section - White Background with Shadow */}
        {/* Table Section - White Background */}
    <div className="bg-white w-[80%] p-4 rounded-lg shadow-md h-[80vh] mx-auto flex">
      {children} {/* Table goes here */}
    </div>

      </div>
    </div>
  );
};

export default PageLayout;
