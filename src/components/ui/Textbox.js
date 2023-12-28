import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Textbox() {
  return (
    <Box
      sx={{
        width: 1000,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="Enter your query here!" id="fullWidth" />
    </Box>
  );
}
