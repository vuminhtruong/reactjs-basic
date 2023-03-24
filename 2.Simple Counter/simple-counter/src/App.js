import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import RemoveIcon from '@mui/icons-material/Remove';
import { deepOrange,green } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';


function App() {
  const [count,setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <div className="content">
        <Stack
         direction="row"
         divider={<Divider orientation="vertical" flexItem />}
         spacing={2}
        >
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            <IconButton variant="contained" aria-label="add" className="button" onClick={increase}>
              <AddIcon color="success"/>
            </IconButton>
          </Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{count}</Avatar>
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded" onClick={decrease}>
            <IconButton variant="contained" aria-label="add" className="button">
            <RemoveIcon color="warning"/>
          </IconButton>
          </Avatar>
        </Stack>
      </div>
    </div>
  );
}

export default App;
