import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS1", "JS", "PYTHON", "TYPESCRIPT"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
export const MuiAutoComplete = () => {
  const [value, setvalue] = useState<string | null>(null);
  console.log({ value });
  const [skill, setskill] = useState<Skill | null>(null);
  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newvalue: string | null) => setvalue(newvalue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newSkill: Skill | null) => setskill(newSkill)}
      />
    </Stack>
  );
};
