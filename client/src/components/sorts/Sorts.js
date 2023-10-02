import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import SortByPower from "./SortByPower";
import SortByName from "./SortByName";
import { Divider } from "@mui/material";

const Sorts = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <SortByPower />
      </FormControl>
      <Divider />
      <FormControl fullWidth>
        <SortByName />
      </FormControl>
    </Box>
  );
};

export default Sorts;
