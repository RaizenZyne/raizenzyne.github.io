import * as React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import InfoIcon from "@mui/icons-material/Info";

export default function Navigation() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname.replace("/", ""));
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ backgroundColor: "gold" }}
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            value=""
            icon={<HomeIcon />}
            onClick={() => {
              navigate("/");
            }}
          />
          <BottomNavigationAction
            label="Skills"
            value="skills"
            icon={<LocalLibraryIcon />}
            onClick={() => {
              navigate("/skills");
            }}
          />
          <BottomNavigationAction
            label="About"
            value="about"
            icon={<InfoIcon />}
            onClick={() => {
              navigate("/about");
            }}
          />
          <BottomNavigationAction
            label="Personal"
            value="personal"
            icon={<PersonIcon />}
            onClick={() => {
              navigate("/personal");
            }}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
