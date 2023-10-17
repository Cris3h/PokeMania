import React from "react";
import { useDispatch } from "react-redux";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { sortPokemonByPower } from "../../../redux/actions";
import "../../../styles/navbar.css";
import { FitScreen } from "@mui/icons-material";

const SortByPower = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(sortPokemonByPower(e.target.value));
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-label" className="inputlabel-sort">
        sort by power
      </InputLabel>
      <Select
        onChange={(e) => handleOnChange(e)}
        label="power"
        defaultValue={""}
        className=""
        sx={{ }}
      >
        <MenuItem value={"HtL"}>weakest first</MenuItem>
        <MenuItem value={"LtH"}>strongest first</MenuItem>
      </Select>
    </div>
  );
};

export default SortByPower;
