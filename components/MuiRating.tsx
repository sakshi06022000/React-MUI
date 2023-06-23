import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

export const MuiRating = () => {
  const [value, setvalue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newvalue: number | null
  ) => {
    setvalue(newvalue);
  };
  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange} precision={0.5} />
    </Stack>
  );
};
