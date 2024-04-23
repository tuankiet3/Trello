import { Box } from "@mui/material";
import Card from "./Card";

function ListCard() {
  return (
    <Box
      sx={{
        m: "0 5px",
        p: "0 5px",
        display: "flex",

        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        gap: 1,
        maxHeight: (theme) =>
          `calc(${theme.Custom.boarContent}
           - ${theme.spacing(5)}
            - ${theme.Custom.contentFooterHeight} 
          - ${theme.Custom.contentHeaderHeight})`,
      }}
    >
      <Card />
    </Box>
  );
}

export default ListCard;
