import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import NumberFloatingFilterComponent from './numberFloatingFilterComponent.jsx';

const Dummy = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete', filter: false },
    {
      field: 'gold',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: NumberFloatingFilterComponent,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
        color: 'red',
      },
    },
    {
      field: 'silver',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: NumberFloatingFilterComponent,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
        color: 'blue',
      },
    },
    {
      field: 'bronze',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: NumberFloatingFilterComponent,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
        color: 'green',
      },
    },
    {
      field: 'total',
      filter: 'agNumberColumnFilter',
      suppressMenu: true,
      floatingFilterComponent: NumberFloatingFilterComponent,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
        color: 'orange',
      },
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      floatingFilter: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
          {console.log('jjjjj',rowData)}
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Dummy