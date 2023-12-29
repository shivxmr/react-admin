import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Prompt() {
  return (
    <Box
      sx={{
        width: 1000,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="Enter your prompt here!" id="fullWidth" />
    </Box>
  );
}
