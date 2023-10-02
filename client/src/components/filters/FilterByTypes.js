import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { filterPokemonByType } from "../../../redux/actions";

const FilterByType = () => {
  const dispatch = useDispatch();
  const { types } = useSelector((state) => state.pokemonReducer);

  const handleOnChange = (e) => {
    dispatch(filterPokemonByType(e.target.value));
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-label">filter by type</InputLabel>
      <Select
        onChange={(e) => handleOnChange(e)}
        label="type"
        defaultValue={""}
      >
            <MenuItem value='all'> all </MenuItem>
        {
            types?.map((t)=> {
               return( 
               <MenuItem value={t.type} key={t.id}>{t.type}</MenuItem>
               )
            })
        }

      </Select>
    </div>
  );
};

export default FilterByType;
