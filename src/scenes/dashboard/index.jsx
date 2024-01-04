import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import Textbox from "../../components/ui/Textbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FullWidthTabs from "../../components/ui/TabPanel";
import CodeContainer from "../../components/ui/Code";
import Prompt from "../../components/ui/Prompt";
import axios from "axios";

const Dashboard = () => {
  const theme = useTheme();
  const colors = {}; // Define your colors or tokens here

  const [query, setQuery] = useState(""); // State to store user query input
  const [sqlCode, setSqlCode] = useState(""); // State to store SQL code response
  const [schemaOfInterest, setSchemaOfInterest] = useState(""); // State to store Schema of Interest

  const handleFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8002/gen_sql", {
        params: {
          query: query,
          collection_name: "sakila",
          limit: 10,
        },
      });

      setSqlCode(response.data.sql); // Set the SQL code in state
      setSchemaOfInterest(response.data.schema_of_interest); // Set Schema of Interest in state
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error or display a message to the user
    }
  };

  // Function to format schema of interest data into readable format
  const formatSchemaOfInterest = () => {
    if (schemaOfInterest && schemaOfInterest.length > 0) {
      return schemaOfInterest.map((schema, index) => (
        <pre key={index}>{schema}</pre>
      ));
    }
    return null;
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Textbox setQuery={setQuery} /> {/* Pass setQuery function as prop */}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleFetchData}>
            Submit
          </Button>
        </Stack>
      </Box>
      <FullWidthTabs />
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: "20px" }}>
        <Prompt />
      </Box>
      <CodeContainer sqlCode={sqlCode} /> {/* Pass sqlCode as prop */}
      <Box>
        <h2>Schema of Interest:</h2>
        {formatSchemaOfInterest()}
      </Box>
    </Box>
  );
};

export default Dashboard;























// import { Box, useTheme } from "@mui/material";
// import { useState } from "react";
// import { tokens } from "../../theme";
// import Textbox from "../../components/ui/Textbox";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import FullWidthTabs from "../../components/ui/TabPanel";
// import CodeContainer from "../../components/ui/Code";
// import Prompt from "../../components/ui/Prompt";
// import axios from "axios";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const [query, setQuery] = useState(""); // State to store user query input
//   const [sqlCode, setSqlCode] = useState(""); // State to store SQL code response

//   const handleFetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8002/gen_sql", {
//         params: {
//           query: query,
//           collection_name: "sakila",
//           limit: 10,
//         },
//       });

//       setSqlCode(response.data.sql); // Set the SQL code in state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       // Handle error or display a message to the user
//     }
//   };

//   return (
//     <Box m="20px">
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Textbox setQuery={setQuery} /> {/* Pass setQuery function as prop */}
//         <Stack direction="row" spacing={2}>
//           <Button variant="contained" onClick={handleFetchData}>
//             Submit
//           </Button>
//         </Stack>
//       </Box>
//       <FullWidthTabs />
//       <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: "20px" }}>
//         <Prompt />
//       </Box>
//       <CodeContainer sqlCode={sqlCode} /> {/* Pass sqlCode as prop */}
//     </Box>
//   );
// };

// export default Dashboard;













// import { Box, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import Textbox from "../../components/ui/Textbox";
// // import ContainedButtons from "../../components/ui/Button";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import FullWidthTabs from "../../components/ui/TabPanel";
// import CodeContainer from "../../components/ui/Code";
// import Prompt from "../../components/ui/Prompt";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="20px">
//       <Box display="flex" justifyContent="space-between" alignItems="center">


//         <Textbox />
//         <Stack direction="row" spacing={2}>
//           <Button variant="contained">Submit</Button>
//         </Stack>
//       </Box>
//       <FullWidthTabs />


//       <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: "20px" }}>

//         <Prompt />
//       </Box>
//       <CodeContainer />
//     </Box>
//   );
// };

// export default Dashboard;