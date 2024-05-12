import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Card as MuiCard } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import PeopleIcon from "@mui/icons-material/People";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import PropTypes from "prop-types";

// import dnd-kit
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
Card.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    card: PropTypes.object,
    title: PropTypes.string,
    cover: PropTypes.string,
    memberIds: PropTypes.object,
    comments: PropTypes.object,
    attachments: PropTypes.object,
    FE_Placeholder: PropTypes.bool,
  }),
};

function Card({ card }) {
  const showCardActions = () => {
    return (
      !!card.memberIds?.length ||
      !!card.comments?.length ||
      !!card.attachments?.length
    );
  };

  // dnd-kit
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card._id, data: { ...card } });

  const DndKitCardSyled = {
    touchAction: "none",

    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "1px solid #3498db" : undefined,
    display: card?.FE_Placeholder ? "none" : "block",
  };

  return (
    <MuiCard
      ref={setNodeRef}
      style={DndKitCardSyled}
      {...attributes}
      {...listeners}
      sx={{
        maxWidth: 345,
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {card.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card.cover}
          title="green iguana"
        />
      )}
      <CardContent sx={{ "&:last-child": { pb: "16px" } }}>
        <Typography variant="body2">{card.title}</Typography>
      </CardContent>
      {showCardActions() && (
        <CardActions sx={{ p: "0 8px 8px 8px" }}>
          {!!card.memberIds?.length && (
            <Button size="small" startIcon={<PeopleIcon />}>
              {card.memberIds.length}
            </Button>
          )}
          {!!card.comments?.length && (
            <Button size="small" startIcon={<ModeCommentIcon />}>
              {card.comments.length}
            </Button>
          )}
          {!!card.attachments?.length && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {card.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  );
}

export default Card;
