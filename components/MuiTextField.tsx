import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import e from "express";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setvalue] = useState(" ");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Age" variant="filled"></TextField>
        <TextField label="City" variant="standard"></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Format Input"
          required
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password"
          disabled
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
