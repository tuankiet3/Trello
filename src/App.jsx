import { useColorScheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Container,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
function App() {
  function SelectMode() {
    const handleChange = (event) => {
      const selectedMode = event.target.value;
      setMode(selectedMode);
    };
    const { mode, setMode } = useColorScheme(); // save theme to local storage

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="label-select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LightModeIcon />
              Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <DarkModeIcon />
              Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SettingsSystemDaydreamIcon />
              System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    );
  }
  return (
    <Container sx={{ height: "100vh" }} disableGutters maxWidth="false">
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.Custom.headerHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <SelectMode />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) => theme.Custom.navbarHeight,
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          height: (theme) =>
            `calc(100vh - ${theme.Custom.headerHeight} - ${theme.Custom.navbarHeight})`,
          alignItems: "center",
        }}
      >
        content
      </Box>
    </Container>
  );
}

export default App;
