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
import Profiles from "./Menu/Profiles";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function AppBar() {
  const [searchValue, setSearchVlue] = useState("");
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.Custom.headerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center" }} gap={0.5}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            sx={{ display: "inline-block" }}
            fontSize="1.2rem"
            fontWeight="bold"
            color="white"
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            startIcon={<AddToPhotosIcon />}
            sx={{
              color: "white",
              border: "none",
              "&:hover": { border: "none" },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchVlue(e.target.value)}
          InputProps={{
            endAdornment: (
              <CloseIcon
                sx={{
                  color: searchValue ? "white" : "transparent",
                  width: "20px",

                  "&:hover": { cursor: "pointer" },
                }}
                size="small"
                onClick={() => {
                  setSearchVlue("");
                }}
              ></CloseIcon>
            ),
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            color: "white",
            "& label": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& input": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
              borderColor: "white",
            },
          }}
        />
        <SelectMode />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{}}>
            <NotificationsNoneIcon sx={{ cursor: "pointer", color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
