import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useState, useEffect} from 'react';

export default function Stocks() {

    const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'SC_NAME', headerName: 'Name', width: 130 },
    { field: 'SC_GROUP', headerName: 'Group', width: 10 },
    { field: 'SC_TYPE', headerName: 'Type', width: 10 },
    {
	field: 'OPEN',
	headerName: 'Open',
	type: 'number',
	width: 80,
    },
    {
	field: 'HIGH',
	headerName: 'High',
	type: 'number',
	width: 80,
    },
    {
	field: 'LOW',
	headerName: 'Low',
	type: 'number',
	width: 80,
    },
    {
	field: 'CLOSE',
	headerName: 'Close',
	type: 'number',
	width: 80,
    },
    {
	field: 'LAST',
	headerName: 'Last',
	type: 'number',
	width: 80,
    },
    {
	field: 'PREVCLOSE',
	headerName: 'Previous Close',
	type: 'number',
	width: 80,
    },
    {
	field: 'NO_TRADES',
	headerName: 'Trades',
	type: 'number',
	width: 80,
    },
    {
	field: 'NO_OF_SHRS',
	headerName: 'Shares',
	type: 'number',
	width: 80,
    },
    {
	field: 'NET_TURNOV',
	headerName: 'Net Trn',
	type: 'number',
	width: 110,
    },
    ];
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
	fetch("http://localhost:4000/stonk?page=0&pageSize=100")
	    .then(res => res.json())
	    .then(
		(result) => {
		    setIsLoaded(true);
		    setItems(result);
		},

		(error) => {
		    setIsLoaded(true);
		    setError(error);
		}
	    )
    }, [])
    
    return (
	<div style={{ height: 400, width: '100%' }}>
	    <DataGrid
		rows={items}
		columns={columns}
		pageSize={5}
		rowsPerPageOptions={[5]}
		checkboxSelection
	    />
	</div>
    );
}
