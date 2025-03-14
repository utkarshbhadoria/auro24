import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule , PaginationModule, ValidationModule, RowAutoHeightModule,ColumnAutoSizeModule } from "ag-grid-community";
import { TextFilterModule } from 'ag-grid-community'; 
import { NumberFilterModule } from 'ag-grid-community'; 
import { DateFilterModule } from 'ag-grid-community'; 
import { CustomFilterModule } from 'ag-grid-community'; 
import PageLayout from "../pages/pageLayout";
import { Trash2, Edit2 } from "lucide-react"; // ✅ Importing Icons


// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, CustomFilterModule, DateFilterModule,NumberFilterModule,TextFilterModule, RowAutoHeightModule,ColumnAutoSizeModule]);


import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { WrapText } from "lucide-react";

const DeviceGroups = () => {
  const [rowData, setRoData] = useState();
  const [columnDefs] = useState([
    { field: "deviceGroupName", headerName: "Profile Name", sortable: true, filter: true },
    { field: "description", headerName: "Description", sortable: true, filter: true, flex: 2, autoHeight: true, wrapText:true },
    { field: "numberOfDevices", headerName: "Device Type", sortable: true, filter: true },
    { field: "lastModified", headerName: "Device Group", sortable: true, filter: true },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <div className="flex gap-3">
          {/* ✅ Edit Button */}
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => handleEditRow(params.data)}
            title="Edit"
          >
            <Edit2 size={18} />
          </button>

          {/* ✅ Delete Button */}
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => handleDeleteRow(params.rowIndex)}
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ),
      width: 120,
    }
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
      const response = await fetch('src/dummyDatas/devicegroup.json');  
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
