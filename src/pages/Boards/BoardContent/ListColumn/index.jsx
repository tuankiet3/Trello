import { Box } from "@mui/material";
import Column from "./Column";

function ListColumn() {
  return (
    <Box
      sx={{
        display: "flex",
        p: "16px 0",
        width: "100%",
        overflow: "auto",

        height: (theme) => theme.Custom.boarContent,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1976d2",
      }}
    >
      <Column />
    </Box>
  );
}

export default ListColumn;
