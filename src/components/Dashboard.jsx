import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import { ValidationModule } from "ag-grid-community"; // 👈 Register Validation Module for debugging

import Sidebar from "./Sidebar"

// Register the required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; // 👈 Using Quartz theme

const Dashboard = () => {
  const [rowData] = useState([
    {
      profileName: "iPhones 2024",
      description:
        "This device profile is designed for iPhones used in 2024 under a Bring Your Own Device (BYOD) policy, implementing enhanced security measures.",
      deviceType: "iPhone",
      deviceGroup: "Device Groups",
      profileType: "BYOD",
    },
  ]);

  const [columnDefs] = useState([
    { field: "profileName", headerName: "Profile Name", sortable: true, filter: true },
    { field: "description", headerName: "Description", sortable: true, filter: true, flex: 2 },
    { field: "deviceType", headerName: "Device Type", sortable: true, filter: true },
    { field: "deviceGroup", headerName: "Device Group", sortable: true, filter: true },
    { field: "profileType", headerName: "Profile Type", sortable: true, filter: true },
  ]);

  return (
    <div className="flex flex-row">
       <Sidebar/>
      <div className="p-4 w-full">
        <h4 className="text-1xl font-bold mb-4 text-cyan-700">DEVICES</h4>
        <h2 className="text-2xl font-bold mb-4">Device Profiles</h2>
        <div className="ag-theme-quartz" style={{ height: 400, width: "100%" }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs} pagination={true} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
