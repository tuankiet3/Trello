import { Box } from "@mui/material";
import ListColunn from "./ListColumn";
import PropTypes from "prop-types";
import { mapOrder } from "~/utils/sort";
import { useEffect, useState } from "react";
import Column from "./ListColumn/Column";
import Card from "./ListColumn/Column/ListCard/Card";
// import dnd-kit
import {
  DndContext,
  MouseSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
BoardContent.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.object,
    })
  ),
};

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

const dropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
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
  const [activeId, setActiveId] = useState(null);
  const [activeIdType, setActiveIdType] = useState(null);
  const [activeIdData, setActiveIdData] = useState(null);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragStart = (event) => {
    setActiveId(event?.active?.id);
    setActiveIdType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveIdData(event?.active?.data?.current);
  };

  const handleDragEnd = (event) => {
    // use object Destructuring get object active and over
    console.log(event);
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

    // sau khi thả reset dữ liệu bằng null
    setActiveId(null);
    setActiveIdType(null);
    setActiveIdData(null);
  };

  console.log("data: ", activeIdData);

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      onDragStart={handleDragStart}
    >
      <Box>
        <ListColunn columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeIdType && null}
          {activeIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? (
            <Column column={activeIdData} />
          ) : (
            <Card card={activeIdData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
