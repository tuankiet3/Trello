import { Box } from "@mui/material";
import ListColunn from "./ListColumn";
import PropTypes from "prop-types";
import { mapOrder } from "~/utils/sort";
// import { useState } from "react";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
BoardContent.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.object,
    })
  ),
};
function BoardContent({ board }) {
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(mouseSensor);
  const [orderedColumns, setOrderedColumns] = useState([]);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragEnd = (event) => {
    // use object Destructuring get object active and over
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      // find old index from active
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);

      // find new index from over
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      // use arrayMove reorganize column
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      setOrderedColumns(dndOrderedColumns);
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box>
        <ListColunn columns={orderedColumns} />
      </Box>
      {/* <DragOverlay>
        {isDragging ? (
          <Box>
            <ListColunn columns={orderedColumns} />
          </Box>
        ) : null}
      </DragOverlay> */}
    </DndContext>
  );
}

export default BoardContent;
