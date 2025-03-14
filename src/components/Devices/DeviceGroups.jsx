import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import { ValidationModule } from "ag-grid-community"; 
import { CellStyleModule } from 'ag-grid-community';
import PageLayout from "../pages/PageLayout";


// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, CellStyleModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { WrapText } from "lucide-react";

const DeviceGroups = () => {
  const [rowData, setRoData] = useState();
  const [columnDefs] = useState([
    { field: "deviceGroupName", headerName: "Device Group Name", sortable: true, filter: true,
      cellStyle: {display: "flex",alignItems: "center"}},
    { field: "description", headerName: "Description", sortable: true, filter: true, flex: 2, autoHeight: true, wrapText:true,
      cellStyle: {display: "flex",alignItems: "center"}},
    { field: "numberOfDevices", headerName: "No of Devices", sortable: true, filter: true,
      cellStyle: {display: "flex",alignItems: "center"} },
    { field: "lastModified", headerName: "Last Modified", sortable: true, filter: true, 
      cellStyle: {display: "flex",alignItems: "center"} },
    {field: "actions", headerName: "Actions"}  
  ]);

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
    wrapText: true, // Enable text wrapping for all columns by default
    autoHeight: true, // Adjust row height based on content for all columns by default
    textAlign: "left"
  };

  async function fetchData() {
    try {
      const response = await fetch('src/dummyDatas/deviceGroup.json');  
      const data = await response.json();  
      setRoData(data); 
    } catch (error) {
      console.log('Error fetching data:', error);  
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <PageLayout 
      title="DEVICES" 
      subtitle="Device Groups" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      
      <div className="ag-theme-quartz">
      <AgGridReact 
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
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

export default DeviceGroups;
