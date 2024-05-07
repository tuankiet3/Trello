import { Box } from "@mui/material";
import ListColunn from "./ListColumn";
import PropTypes from "prop-types";
import { mapOrder } from "~/utils/sort";
import { useEffect, useState } from "react";
import Column from "./ListColumn/Column";
import Card from "./ListColumn/Column/ListCard/Card";

// import lodash
import { cloneDeep } from "lodash";

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
  const [activeItemType, setActiveItemType] = useState(null);
  const [activeIdData, setActiveIdData] = useState(null);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  // find column by card id
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) =>
      column?.cards.map((card) => card?._id).includes(cardId)
    );
  };

  // drag
  const handleDragStart = (event) => {
    setActiveId(event?.active?.id);
    setActiveItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveIdData(event?.active?.data?.current);
  };

  // dragging
  const handleDragOver = (event) => {
    const { active, over } = event;
    // if active or over not exits then stop function
    if (!active || !over) return;
    // get id and data of card dragging
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    // get id location drop
    const { id: overCardId } = over;

    // get 2 column by id active and over
    const activeColumn = findColumnByCardId(activeDraggingCardId);
    const overColumn = findColumnByCardId(overCardId);

    if (!activeColumn || !overColumn) return;
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns((prevColumns) => {
        // location want drop card
        const overCardIndex = overColumn?.cards.findIndex(
          (card) => card._id === overCardId
        );

        // find new index for active card above or blow overCard
        let newCardIndex;

        // rect: is location of the element relative to the frame
        const isBelowOverItem =
          over &&
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards.length + 1;

        // clone array orderedColumn processing without affecting the orderedColumn
        const nextColumns = cloneDeep(prevColumns);
        const nextActiveColumn = nextColumns.find(
          (column) => column?._id === activeColumn?._id
        );
        const nextOverColumn = nextColumns.find(
          (column) => column?._id === overColumn?._id
        );
        if (nextActiveColumn) {
          // deleted card dragging in old column
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );
          // refesh data in cardOrderIds
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }
        if (nextOverColumn) {
          // check card exist in column, if card exits then deleted card
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );
          // add card dragging to overColumn by new index
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          );
          // refesh data in cardOrderIds
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }

        return nextColumns;
      });
    }
  };
  // drog
  const handleDragEnd = (event) => {
    // use object Destructuring get object active and over
    const { active, over } = event;

    // if over or active not exist then stop function
    if (!over || !active) return;

    // check dragging a card or column
    if (activeItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      console.log("dragging card");
      return;
    }
    if (
      activeItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN &&
      active.id !== over.id
    ) {
      // find old index from active
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);

      // find new index from over
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      // use arrayMove reorganize column
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      setOrderedColumns(dndOrderedColumns);
    }

    // after drog reset data is null
    setActiveId(null);
    setActiveItemType(null);
    setActiveIdData(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box>
        <ListColunn columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeItemType && null}
          {activeItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? (
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
