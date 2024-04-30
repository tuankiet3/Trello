/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import Column from "./Column";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
ListColumn.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.array.isRequired,
    })
  ).isRequired,
};
function ListColumn({ columns }) {
  return (
    <SortableContext
      items={columns?.map((c) => c?._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          p: "8px 0",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#2c3e50" : "#1976d2",

          height: (theme) => theme.Custom.boarContent,
        }}
      >
        <Box
          sx={{
            p: "8px 0",
            display: "flex",
            width: "100%",
            overflow: "auto",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#2c3e50" : "#1976d2",
          }}
        >
          {columns?.map((column) => (
            <Column column={column} key={column?._id} />
          ))}

          <Box sx={{}} ml={1}>
            <Button
              variant="text"
              sx={{
                color: "white",
                maxWidth: "200px",
                minWidth: "200px",
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                backgroundColor: "#ffffff3d",
              }}
              startIcon={<AddIcon />}
            >
              Add new card
            </Button>
          </Box>
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListColumn;
