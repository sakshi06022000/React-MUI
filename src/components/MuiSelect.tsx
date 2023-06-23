import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handlechange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="CH">China</MenuItem>
        <MenuItem value="AU">Austrila</MenuItem>
      </TextField>
    </Box>
  );
};
