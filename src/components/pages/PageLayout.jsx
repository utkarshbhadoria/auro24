import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Plus } from "lucide-react";
import { Dialog } from "@headlessui/react";

const PageLayout = ({ children, title, subtitle, description }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState("");

    // Handle dialog opening
    const openDialog = (content) => {
      setDialogContent(content);
      setIsOpen(true);
    };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="self-start" />

      {/* Parent Container - Full Page Height */}
      <div className="w-full flex flex-col flex-1 gap-4 p-6">
        
        {/* Title Section */}
        <div className="bg-gray-100 w-[80%] mx-auto">
          <h4 className="text-lg font-bold mb-2 text-cyan-700 text-left">{title}</h4>
          {subtitle && <h2 className="text-xl font-bold mb-2 text-left">{subtitle}</h2>}

          {/* Description & Buttons */}
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-700 w-[70%] text-left">{description}</p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button 
                className="flex items-center gap-2 bg-transparent hover:bg-cyan-700 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded whitespace-nowrap"
                onClick={() => openDialog("Create Device Group")}
              >
                <Plus size={16} /> Create Device Group
              </button>

              <button 
                className="flex items-center gap-2 bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded whitespace-nowrap"
                onClick={() => openDialog("New Device Profile")}
              >
                <Plus size={16} /> New Device Profile
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Full-Page Table Section */}
        <div className="bg-white w-[80%] p-4 rounded-lg shadow-md flex-1 mx-auto overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
