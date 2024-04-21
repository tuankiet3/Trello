import { Box } from "@mui/material";

function  BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        display: "flex",
        height: (theme) =>
          `calc(100vh - ${theme.Custom.headerHeight} - ${theme.Custom.navbarHeight})`,
        alignItems: "center",
      }}
    >
      content
    </Box>
  );
}

export default BoardContent;
