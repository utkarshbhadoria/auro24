import Sidebar from './Sidebar';
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import { ValidationModule } from "ag-grid-community"; 
import PageLayout from "./pages/pageLayout";

// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Dashboard = () => {
  const [rowData] = useState([
    {
      profileName: "iPhones 2024",
      description:
        "This device profile is designed for iPhones used in 2024 under a Bring Your Own Device (BYOD) policy. It enforces strict security protocols, remote wiping, and data encryption for enhanced protection.",
      deviceType: "iPhone",
      deviceGroup: "Device Groups",
      profileType: "BYOD",
    },
    {
      profileName: "MacBooks 2024",
      description:
        "This profile is designed for MacBook Pro and MacBook Air devices. It ensures that all company-owned MacBooks comply with data protection policies, software patching, and remote management.",
      deviceType: "MacBook",
      deviceGroup: "Engineering",
      profileType: "Corporate",
    },
    {
      profileName: "Windows Laptops 2024",
      description:
        "This device profile applies to company-issued Windows laptops. It enables BitLocker encryption, remote desktop management, and multi-factor authentication to prevent unauthorized data breaches.",
      deviceType: "Windows Laptop",
      deviceGroup: "IT Department",
      profileType: "Corporate",
    },
    {
      profileName: "Android Phones 2024",
      description:
        "This profile is designed for Android devices being used under the company's BYOD policy. It enforces application whitelisting, mobile device management (MDM), and remote device locking.",
      deviceType: "Android Phone",
      deviceGroup: "Sales",
      profileType: "BYOD",
    },
    {
      profileName: "Tablets - Healthcare",
      description:
        "This profile is dedicated to healthcare facilities where tablets are used by medical staff. It restricts access to social media, third-party apps, and implements strong device encryption.",
      deviceType: "Tablet",
      deviceGroup: "Healthcare",
      profileType: "Secure Access",
    },
    {
      profileName: "POS Machines - Retail",
      description:
        "This profile is designed for Point-of-Sale (POS) devices in retail stores. It ensures that the POS devices remain secure, isolated from external networks, and run only authorized software.",
      deviceType: "POS Machine",
      deviceGroup: "Retail",
      profileType: "Limited Access",
    },
    {
      profileName: "IoT Devices - Smart Office",
      description:
        "This profile handles IoT devices installed in smart offices such as smart lights, sensors, and air conditioning systems. It ensures restricted network access and device health monitoring.",
      deviceType: "IoT Device",
      deviceGroup: "Smart Office",
      profileType: "Network Restricted",
    },
    {
      profileName: "Office Printers - Secure Access",
      description:
        "This profile secures all office printers by enforcing user authentication, print log tracking, and data encryption during document printing. It also blocks unauthorized remote print requests.",
      deviceType: "Printer",
      deviceGroup: "Admin",
      profileType: "Secure Print",
    },
    {
      profileName: "Smart TVs - Conference Rooms",
      description:
        "This profile is created for Smart TVs used in conference rooms for official presentations. It locks down operating systems, prevents app installations, and restricts internet browsing.",
      deviceType: "Smart TV",
      deviceGroup: "Operations",
      profileType: "Media Restricted",
    },
    {
      profileName: "Vehicle Tracking Devices",
      description:
        "This profile applies to GPS vehicle tracking devices used in company vehicles. It logs vehicle movement, route history, and prevents unauthorized changes in device configurations.",
      deviceType: "GPS Tracker",
      deviceGroup: "Fleet Management",
      profileType: "Location Tracking",
    }
  ]);
  

  const [columnDefs] = useState([
    { field: "profileName", headerName: "Profile Name", sortable: true, filter: true },
    { field: "description", headerName: "Description", sortable: true, filter: true, flex: 2, autoHeight: true },
    { field: "deviceType", headerName: "Device Type", sortable: true, filter: true },
    { field: "deviceGroup", headerName: "Device Group", sortable: true, filter: true },
    { field: "profileType", headerName: "Profile Type", sortable: true, filter: true },
  ]);

  return (
    <PageLayout 
      title="DEVICES" 
      subtitle="Device Profiles" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      
      {/* ✅ Table Now Expands Full Page */}
      <div className="ag-theme-quartz w-full h-full">
      <AgGridReact 
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            cellStyle: { textAlign: "left", whiteSpace: "normal" }
          }}
          autoHeight={true} /* ✅ Automatically expand rows */
          pagination={true}
          paginationPageSize={10} /* Optional: Set pagination */
          onGridReady={(params) => params.api.sizeColumnsToFit()} /* Ensure columns fit */
          suppressRowVirtualization={true} /* ✅ Prevent row collapse */
          getRowHeight={(params) => {
            if (params.node.data && params.node.data.description) {
              return 90; // Automatically set height based on text
            }
            return 55;
          }}
      />
      </div>
    </PageLayout>
  );
}

export default Dashboard;
