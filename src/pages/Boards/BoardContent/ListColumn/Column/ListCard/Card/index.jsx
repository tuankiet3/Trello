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

Card.propTypes = {
  card: PropTypes.shape({
    card: PropTypes.object,
    title: PropTypes.string,
    cover: PropTypes.string,
    memberIds: PropTypes.object,
    comments: PropTypes.object,
    attachments: PropTypes.object,
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

  return (
    <MuiCard
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
