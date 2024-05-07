import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useState } from "react";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
import ListCard from "./ListCard";
import PropTypes from "prop-types";
import { mapOrder } from "~/utils/sort";

// import dnd-kit
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

Column.propTypes = {
  column: PropTypes.shape({
    _id: PropTypes.string,
    column: PropTypes.object,
    title: PropTypes.string,
    cards: PropTypes.object,
    cardOrderIds: PropTypes.object,
  }).isRequired,
};

function Column({ column }) {
  // dnd-kit
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column._id, data: { ...column } });

  const DndKitColumnSyled = {
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    height: "inherit",
    opacity: isDragging ? 0.5 : undefined,
  };

  // event click

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");
  return (
    <div ref={setNodeRef} style={DndKitColumnSyled} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          maxHeight: (theme) =>
            `calc(${theme.Custom.boarContent} - ${theme.spacing(5)})`,
          height: "fit-content",
        }}
      >
        {/* header */}
        <Box
          sx={{
            height: (theme) => theme.Custom.contentHeaderHeight,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {column?.title}
          </Typography>
          <Box>
            <ExpandMoreIcon
              id="basic-button-column"
              aria-controls={open ? "basic-menu-column" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: "text.primary", cursor: "pointer" }}
            ></ExpandMoreIcon>
            <Menu
              id="basic-menu-column"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button-column",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add to card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* content */}
        <ListCard cards={orderedCards} />
        {/* footer */}
        <Box
          sx={{
            height: (theme) => theme.Custom.contentFooterHeight,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button startIcon={<AddCardIcon />}>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
}

export default Column;
