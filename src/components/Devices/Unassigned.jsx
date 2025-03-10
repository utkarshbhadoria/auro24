import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import { ValidationModule } from "ag-grid-community"; 
import PageLayout from "../pages/PageLayout";


// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Unassigned = () => {
  const [rowData, setRoData] = useState();
  const [columnDefs] = useState([
    { field: "profileName", headerName: "Profile Name", sortable: true, filter: true },
    { field: "description", headerName: "Description", sortable: true, filter: true, flex: 2, autoHeight: true, wrapText:true  },
    { field: "deviceType", headerName: "Device Type", sortable: true, filter: true },
    { field: "deviceGroup", headerName: "Device Group", sortable: true, filter: true },
    { field: "profileType", headerName: "Profile Type", sortable: true, filter: true },
  ]);

  async function fetchData() {
    try {
      const response = await fetch('src/dummyDatas/deviceProfile.json');  
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
      subtitle="Unassigned Devices" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      
      {/* ✅ Table Now Expands Full Page */}
      <div className="ag-theme-quartz">
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

export default Unassigned;
