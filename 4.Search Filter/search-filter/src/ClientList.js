import React, { useState } from "react";
import data from "./data/MOCK_DATA.json";
import TextField from '@mui/material/TextField';


function ClientList(){
    const [value,setValue] = useState('');

    function handleChange(event){
        setValue(event.target.value);
    }

    const filteredData = data.filter((client) => 
      client.first_name.toLowerCase().startsWith(value.toLowerCase())
    );

    return (<div className="filter">
      <TextField
        id="outlined-textarea"
        label="Search name"
        placeholder="Client name"
        onChange={handleChange}
        value={value}
        multiline
      />
      {
        filteredData.map((client) => (
            <div key={client.id} className="name">
              <h2>{client.first_name} {client.last_name}</h2>
            </div>
        ))
      }
    </div>
    );
}

export default ClientList;