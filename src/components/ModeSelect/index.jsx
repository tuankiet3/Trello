import { useColorScheme } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
function SelectMode() {
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };
  const { mode, setMode } = useColorScheme(); // save theme to local storage

  return (
    <FormControl size="small">
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
export default SelectMode;
