import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Textbox({ setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value); // Update query value using the setQuery function
  };

  return (
    <Box
      sx={{
        width: "100vw", // Set width to viewport width
        paddingX: 1, // 1 unit = 8px padding
      }}
    >
      <TextField
        fullWidth
        label="Enter your query here!"
        id="fullWidth"
        onChange={handleInputChange}
      />
    </Box>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function Textbox() {
//   return (
//     <Box
//       sx={{
//         width: "100vw", // Set width to viewport width
//         paddingX: 1, // 1 unit equals 8px, so 1 unit here means 8px padding
//       }}
//     >
//       <TextField fullWidth label="Enter your query here!" id="fullWidth" />
//     </Box>
//   );
// }
