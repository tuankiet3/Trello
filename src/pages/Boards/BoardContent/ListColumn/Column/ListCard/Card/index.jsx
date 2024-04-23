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
function Card() {
  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1713624130701-b77e59e03ce6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
        title="green iguana"
      />
      <CardContent sx={{ "&:last-child": { pb: "16px" } }}>
        <Typography variant="body2">Trungquandev Mern stack</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 8px 8px 8px" }}>
        <Button size="small" startIcon={<PeopleIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<ModeCommentIcon />}>
          10
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
