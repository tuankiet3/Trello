import { Box, Chip, Button, AvatarGroup, Avatar } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import VpnLockRoundedIcon from "@mui/icons-material/VpnLockRounded";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import capitalizeFirstLetter from "~/utils/formatters";
import PropTypes from "prop-types";

const commonSyled = {
  border: "none",
  bgcolor: "transparents",
  paddingX: "5px",
  color: "white",
  "& .MuiSvgIcon-root": {
    color: "white",
  },

  "&:hover": {
    bgcolor: "#2d3436  !important",
  },
};

BoardBar.propTypes = {
  board: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

function BoardBar({ board }) {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.Custom.boarBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <Chip
          icon={<DashboardRoundedIcon />}
          label={board?.title}
          variant="outlined"
          sx={commonSyled}
          clickable
        />
        <Chip
          icon={<VpnLockRoundedIcon />}
          label={capitalizeFirstLetter(board?.type)}
          variant="outlined"
          sx={commonSyled}
          clickable
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          variant="outlined"
          sx={commonSyled}
          clickable
        />
        <Chip
          icon={<BoltIcon />}
          label="Automation "
          variant="outlined"
          sx={commonSyled}
          clickable
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          variant="outlined"
          sx={commonSyled}
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            border: "1px solid white",
            "&:hover": { borderColor: "white" },
          }}
        >
          Create
        </Button>
        <AvatarGroup
          max={6}
          sx={{
            "& .MuiAvatar-root": {
              width: "32px",
              height: "32px",
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": {
                bgcolor: "#a4b0be",
              },
            },
            gap: "10px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <Avatar
            alt="Travis Howard"
            src="https://plus.unsplash.com/premium_photo-1674180786953-4223a4208d9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"
          />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
