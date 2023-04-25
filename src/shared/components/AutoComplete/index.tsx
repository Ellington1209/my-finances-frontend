import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface IAutoComplete {
  label: string;
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
  options: {
    value: string | number;
    label: string;
  }[];
}

const AutoComplete: React.FC<IAutoComplete> = ({ color, label, options }) => {
  return (
    <Autocomplete
      disablePortal    
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} color={color} />}
      getOptionLabel={(option) => option.label}
    />
  );
};

export default AutoComplete;
