import {
  Badge,
  Box,
  Button,
  SvgIcon,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SelectMode from "~/components/ModeSelect";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import Workspaces from "./Menu/Workspaces";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.Custom.headerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center" }} gap={0.5}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            sx={{ display: "inline-block" }}
            fontSize="1.2rem"
            fontWeight="bold"
            color="primary.main"
          >
            Trello
          </Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Outlined</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
        />
        <SelectMode />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon sx={{ cursor: "pointer" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Notification">
          <HelpOutlineIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default AppBar;
