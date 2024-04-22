import { Box } from "@mui/material";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        display: "flex",
        height: (theme) =>
          `calc(100vh - ${theme.Custom.headerHeight} - ${theme.Custom.navbarHeight})`,
        alignItems: "center",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1976d2",
      }}
    >
      content
    </Box>
  );
}

export default BoardContent;
