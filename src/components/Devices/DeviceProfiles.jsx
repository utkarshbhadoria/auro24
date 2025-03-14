import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule , PaginationModule, ValidationModule, RowAutoHeightModule,ColumnAutoSizeModule, CellStyleModule } from "ag-grid-community";
import { TextFilterModule } from 'ag-grid-community'; 
import { NumberFilterModule } from 'ag-grid-community'; 
import { DateFilterModule } from 'ag-grid-community'; 
import { CustomFilterModule } from 'ag-grid-community'; 

import PageLayout from "../pages/pageLayout";
import { Trash2, Edit2 } from "lucide-react"; // ✅ Importing Icons

// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, CustomFilterModule, DateFilterModule,NumberFilterModule,TextFilterModule, RowAutoHeightModule,ColumnAutoSizeModule, CellStyleModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const DeviceProfiles = () => {
  const [rowData, setRowData] = useState(); // ✅ Fixed Typo

  // ✅ Function to Delete Row
  const handleDeleteRow = (index) => {
    const updatedRows = [...rowData];
    updatedRows.splice(index, 1);
    setRowData(updatedRows);
  };

  // ✅ Function to Edit Row (You Can Trigger a Modal Here)
  const handleEditRow = (rowData) => {
    alert(`Editing Row: ${rowData.profileName}`);
    // ✅ Later, you can open a modal here to edit data
  };

  const [columnDefs] = useState([
    { field: "profileName", headerName: "Profile Name", sortable: true, filter: true },
    { field: "description", headerName: "Description", sortable: true, filter: true, flex: 2, autoHeight: true, wrapText: true },
    { field: "deviceType", headerName: "Device Type", sortable: true, filter: true },
    { field: "deviceGroup", headerName: "Device Group", sortable: true, filter: true },
    { field: "profileType", headerName: "Profile Type", sortable: true, filter: true },

    // ✅ NEW COLUMN FOR ACTIONS (EDIT/DELETE)
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

  async function fetchData() {
    try {
      const response = await fetch('src/dummyDatas/deviceProfile.json');  
      const data = await response.json();  
      setRowData(data); // ✅ Fixed Typo
    } catch (error) {
      console.log('Error fetching data:', error);  
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageLayout 
      title="DEVICES" 
      subtitle="Device Profiles" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      
      {/* ✅ Table Now Expands Full Page */}
      <div className="ag-theme-quartz">
        <AgGridReact 
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
              cellStyle: { 
                  textAlign: "left", 
                  whiteSpace: "normal",
                  fontSize: "16px" 
              } 
          }}
          pagination={true}
          paginationPageSize={6} /* ✅ Ensure 10 rows per page */
          onGridReady={(params) => {
              params.api.sizeColumnsToFit(); /* ✅ Make sure columns fit */
              params.api.refreshCells({ force: true }); /* ✅ Force reapply styles */
          }}
          suppressRowVirtualization={true} /* ✅ Prevent row collapse */
          getRowHeight={(params) => {
              if (params.node.data && params.node.data.description) {
                  return 90; // ✅ Ensure proper row height
              }
              return 70;
          }}
        />
      </div>
    </PageLayout>
  );
}

export default DeviceProfiles;
