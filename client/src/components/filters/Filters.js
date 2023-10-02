import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FilterByType from './FilterByTypes';
import { Divider } from '@mui/material';


const Filters = ()=>{
  return (
    <Box sx={{ minWidth: 120 }}>
      <Divider />
      <FormControl fullWidth>
          <FilterByType />
      </FormControl>
      <Divider />

      {/* <FormControl>
        
      </FormControl> */}
    </Box>
  );
}

export default Filters;