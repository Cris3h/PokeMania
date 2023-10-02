import React from "react";
import { useDispatch } from "react-redux";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { sortPokemonByName } from "../../../redux/actions";

const SortByName = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(sortPokemonByName(e.target.value));
  };

  // console.log(pokemon)

  return (
    <div>
      <InputLabel id="demo-simple-select-label">sort by name</InputLabel>
      <Select 
      onChange={(e) => handleOnChange(e)} 
      label="alphabeth" 
      defaultValue={''}
      >
        <MenuItem value={"a-z"}>A - Z</MenuItem>
        <MenuItem value={"z-a"}>Z - A</MenuItem>
      </Select>
    </div>
  );
};

export default SortByName;