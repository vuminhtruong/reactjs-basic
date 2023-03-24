import React, { useState } from "react";
import { Avatar,Grid,Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function App() {
  const [temperature,setTemperature] = useState(0);
  const [color,setColor] = useState("#00FFFF");

  function increase() {
    const value = temperature + 1;
    setTemperature(value);
    sensation(value);
  }

  function decrease() {
    const value = temperature -1;
    setTemperature(value);
    sensation(value);
  }

  function sensation(temperature) {
    if(temperature < 15){
      setColor("#00FFFF");
    } else if(temperature > 30) {
      setColor("#FF0000");
    } else {
      setColor("#FF00FF");
    }
  }

  return (
    <div id="app">
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Avatar style={{
            marginTop: 250,
            width: 120,
            height: 120,
            backgroundColor: color,
            }}>{temperature}</Avatar>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" id="button" onClick={increase}>
            <AddIcon />
          </Button>
          <Button variant="contained" color="secondary" onClick={decrease}>
            <RemoveIcon />
          </Button>
        </Grid> 
      </Grid>
    </div> 
  );
}

export default App;
