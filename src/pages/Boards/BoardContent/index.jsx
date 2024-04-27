import { Box } from "@mui/material";
import ListColunn from "./ListColumn";
import PropTypes from "prop-types";
import { mapOrder } from "~/utils/sort";
BoardContent.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.object,
    })
  ),
};
function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <Box>
      <ListColunn columns={orderedColumns} />
    </Box>
  );
}

export default BoardContent;
