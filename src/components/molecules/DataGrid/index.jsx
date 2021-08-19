import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import './style.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
/**
 * Component: Data Grid
 * Description: Allows displaying data in tabular format along with additional features like sorting and resizing of the columns
 * Dependancy: AG Grid community Edition
 * @param {*} props 
 * @param {*} ref 
 * @returns 
 */
const DataGrid = React.forwardRef((prop, ref) => {
    const onSelectionChanged = (event) =>{
        prop.setSelectedUserRows(event.api.getSelectedRows())
    }
   return (
       <div className="ag-theme-alpine full-width full-height">
           <AgGridReact rowData={prop.rowData} pagination={prop.paginate} paginationPageSize={prop.pageSize} frameworkComponents={prop.frameworkComponents} rowSelection={prop.rowSelection} onSelectionChanged={onSelectionChanged} suppressRowClickSelection={prop.suppressRowClickSelection}>
               {prop.dataModal.map((props,index)=>{
                return(<AgGridColumn {...props}  key={index}/>)
               })}
           </AgGridReact>
       </div>
   );
});
export default DataGrid;