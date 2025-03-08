import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import { ValidationModule } from "ag-grid-community"; 
import PageLayout from "../pages/pageLayout"; // Import the layout

// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; 

const DeviceProfiles = () => {
  const [rowData] = useState([
    {
      profileName: "iPhones 2024",
      description:
        "This device profile is designed for iPhones used in 2024 under a Bring Your Own Device (BYOD) policy, implementing enhanced security measures.",
      deviceType: "iPhone",
      deviceGroup: "Device Groups",
      profileType: "BYOD",
    },
    {
      profileName: "MacBooks 2024",
      description: "Designed for MacBook Pro/Air devices used in 2024, ensuring security and compliance.",
      deviceType: "MacBook",
      deviceGroup: "Engineering",
      profileType: "Corporate",
    },
    {
      profileName: "Android Phones 2024",
      description: "Profile tailored for Android devices used under the company’s Mobile Device Management (MDM) policy.",
      deviceType: "Android Phone",
      deviceGroup: "Sales",
      profileType: "BYOD",
    },
    {
      profileName: "Windows Laptops 2024",
      description: "Secured and optimized profile for company-issued Windows laptops.",
      deviceType: "Windows Laptop",
      deviceGroup: "IT Department",
      profileType: "Corporate",
    },
    {
      profileName: "Tablets - Healthcare",
      description: "Profile for tablets used in healthcare to ensure data privacy and compliance.",
      deviceType: "Tablet",
      deviceGroup: "Healthcare",
      profileType: "Secure Access",
    },
    {
      profileName: "Wearables - R&D",
      description: "Security policies for wearable devices used in research & development.",
      deviceType: "Smartwatch",
      deviceGroup: "R&D",
      profileType: "Experimental",
    },
    {
      profileName: "Gaming Consoles 2024",
      description: "Restricted access policy for gaming consoles in testing environments.",
      deviceType: "Gaming Console",
      deviceGroup: "QA",
      profileType: "Restricted",
    },
    {
      profileName: "IoT Devices 2024",
      description: "Profile to manage IoT-based devices ensuring secure network access. Restricted access policy for gaming consoles in testing environments. Restricted access policy for gaming consoles in testing environments.",
      deviceType: "IoT Device",
      deviceGroup: "Smart Office",
      profileType: "Network Restricted",
    },
    {
      profileName: "Printers - Office",
      description: "Security configuration for office printers to prevent unauthorized access.",
      deviceType: "Printer",
      deviceGroup: "Admin",
      profileType: "Secure Print",
    },
    {
      profileName: "Smart TVs - Meeting Rooms",
      description: "Pre-configured settings for smart TVs used in meeting rooms.",
      deviceType: "Smart TV",
      deviceGroup: "Operations",
      profileType: "Media Restricted",
    },
    {
      profileName: "Linux Workstations",
      description: "Optimized profile for Linux-based workstations used in engineering.",
      deviceType: "Linux PC",
      deviceGroup: "Development",
      profileType: "Developer Access",
    },
  ]);


  const [columnDefs] = useState([
    { field: "profileName", headerName: "Profile Name", sortable: true, filter: true },
    { field: "description", headerName: "Description", sortable: true, filter: true, flex: 2 , autoHeight: true},
    { field: "deviceType", headerName: "Device Type", sortable: true, filter: true },
    { field: "deviceGroup", headerName: "Device Group", sortable: true, filter: true },
    { field: "profileType", headerName: "Profile Type", sortable: true, filter: true },
  ]);

  return (
    <PageLayout title="DEVICES" subtitle="Device Profiles" description= "Lorem ipsum odor amet, consectetuer adipiscing elit.">
      <div className="ag-theme-quartz" style={{ height: "100%", width: "100%" }}>
        <AgGridReact 
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{ cellStyle: { textAlign: "left", whiteSpace: "normal" } }} /* Ensure all columns support multi-line */
            rowHeight={80} /* Adjust as needed */
            domLayout="autoHeight" /* Allow automatic height adjustment */
            pagination={true}
        />
      </div>
    </PageLayout>
  );
};

export default DeviceProfiles;
