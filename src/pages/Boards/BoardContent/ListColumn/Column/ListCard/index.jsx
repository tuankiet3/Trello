import { Box } from "@mui/material";
import Card from "./Card";
import PropTypes from "prop-types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCard({ cards }) {
  return (
    <SortableContext
      items={cards?.map((c) => c?._id)}
      strategy={verticalListSortingStrategy}
    >
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
        {cards?.map((card) => (
          <Card card={card} key={card?._id} />
        ))}
      </Box>
    </SortableContext>
  );
}

ListCard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ListCard;
