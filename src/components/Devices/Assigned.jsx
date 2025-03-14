import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule , ValidationModule, RowAutoHeightModule,ColumnAutoSizeModule } from "ag-grid-community";
import { TextFilterModule } from 'ag-grid-community'; 
import { NumberFilterModule } from 'ag-grid-community'; 
import { DateFilterModule } from 'ag-grid-community'; 
import { CustomFilterModule } from 'ag-grid-community'; 
import PageLayout from "../pages/pageLayout";


// Register required modules

// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, CustomFilterModule, DateFilterModule,NumberFilterModule,TextFilterModule, RowAutoHeightModule,ColumnAutoSizeModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Assigned = () => {
  const [rowData, setRoData] = useState();
  const [columnDefs] = useState([
    { field: "deviceName", headerName: "Device Name", sortable: true, filter: true },
    { field: "groups", headerName: "Groups", sortable: true, filter: true, flex: 2, autoHeight: true , wrapText:true },
    { field: "profiles", headerName: "Profiles", sortable: true, filter: true },
    { field: "os", headerName: "OS", sortable: true, filter: true },
    { field: "serialNo", headerName: "Serial No", sortable: true, filter: true },
    { field: "battery", headerName: "Battery", sortable: true, filter: true },
    { field: "lastSeen", headerName: "Last Seen", sortable: true, filter: true },
  ]);

  async function fetchData() {
    try {
      const response = await fetch('src/dummyDatas/assigned.json');  
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
      subtitle="Assigned Devices" 
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

export default Assigned;
