import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { useState } from "react";

export const MuiCheckbox = () => {
  const [acceptTnC, setacceptTnC] = useState(false);
  console.log({ acceptTnC });
  const [skills, setskills] = useState<string[]>([]);
  console.log({ skills });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setacceptTnC(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setskills([...skills, event.target.value]);
    } else {
      setskills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms & conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        ></Checkbox>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skils </FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
