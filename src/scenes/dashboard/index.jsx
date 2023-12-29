import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Textbox from "../../components/ui/Textbox";
import ContainedButtons from "../../components/ui/Button";
import FullWidthTabs from "../../components/ui/TabPanel";
import CodeContainer from "../../components/ui/Code";
import Prompt from "../../components/ui/Prompt";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">


        <Textbox />
        <ContainedButtons />
      </Box>

      <FullWidthTabs />

      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: "20px" }}>

        <Prompt />
      </Box>
      <CodeContainer />
    </Box>
  );
};

export default Dashboard;
