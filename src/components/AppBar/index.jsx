import { Box } from "@mui/material";
import SelectMode from "~/components/ModeSelect";

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.Custom.headerHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <SelectMode />
    </Box>
  );
}

export default AppBar;
