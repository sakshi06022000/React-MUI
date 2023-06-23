import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export const MuiRadio = () => {
  const [value, setvalue] = useState("");
  console.log({ value });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-9" value="6-9" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
