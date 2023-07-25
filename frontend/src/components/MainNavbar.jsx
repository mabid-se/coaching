import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

import coachingLogo from "../assets/images/coaching-logo.png";

const MainNavbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const genFunc = (func1, func2) => {
    func1();
    func2();
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ px: 2 }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for large displays */}
            <Link
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              <img
                src={coachingLogo}
                style={{ width: "100%", maxWidth: "250px", height: "auto" }}
              />
            </Link>

            {/* Menu for large displays */}

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="subtitle1"
                onClick={() => navigate("/")}
                sx={{
                  m: 3,
                  paddingTop: 1,
                  cursor: "pointer",
                  color: "#1d1d51",
                  fontWeight: 600,
                  "&:hover": { color: "#752eef" },
                }}
              >
                Coaching Platform
              </Typography>
              <Typography
                variant="subtitle1"
                onClick={() => navigate("/coaches")}
                sx={{
                  m: 3,
                  paddingTop: 1,
                  cursor: "pointer",
                  color: "#1d1d51",
                  fontWeight: 600,
                  "&:hover": { color: "#752eef" },
                }}
              >
                Find a Coach
              </Typography>

              <Typography
                variant="subtitle1"
                onClick={() => navigate("/")}
                sx={{
                  m: 3,
                  paddingTop: 1,
                  cursor: "pointer",
                  color: "#1d1d51",
                  fontWeight: 600,
                  "&:hover": { color: "#752eef" },
                }}
              >
                Pricing
              </Typography>

              <Typography
                variant="subtitle1"
                onClick={() => navigate("/login")}
                sx={{
                  m: 3,
                  paddingTop: 1,
                  cursor: "pointer",
                  color: "#1d1d51",
                  fontWeight: 600,
                  "&:hover": { color: "#752eef" },
                }}
              >
                Sign In/Up
              </Typography>

              <Button
                sx={{
                  m: 3,
                  px: 2,
                  color: "#752eef",
                  fontWeight: 600,
                  border: 2,
                  borderRadius: 15,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#752eef",
                    borderColor: "#752eef",
                  },
                }}
              >
                get started
              </Button>
            </Box>

            {/* Logo for small displays */}
            <Typography
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              <img
                src={coachingLogo}
                alt="coaching mobile logo"
                style={{ width: "70%" }}
              />
            </Typography>

            {/* Menu for Small displays */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    m: 3,
                    cursor: "pointer",
                    color: "#1d1d51",
                    fontWeight: 700,
                  }}
                  onClick={() => genFunc(navigate("/"), handleCloseNavMenu)}
                >
                  Coaching Platform
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    m: 3,
                    cursor: "pointer",
                    color: "#1d1d51",
                    fontWeight: 700,
                  }}
                  onClick={() =>
                    genFunc(navigate("/coaches"), handleCloseNavMenu)
                  }
                >
                  Find a Coach
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    m: 3,
                    cursor: "pointer",
                    color: "#1d1d51",
                    fontWeight: 700,
                  }}
                  onClick={() => genFunc(navigate("/"), handleCloseNavMenu)}
                >
                  Pricing
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    m: 3,
                    cursor: "pointer",
                    color: "#1d1d51",
                    fontWeight: 700,
                  }}
                  onClick={() =>
                    genFunc(navigate("/login"), handleCloseNavMenu)
                  }
                >
                  Sign In/Up
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    m: 3,
                    cursor: "pointer",
                    color: "#1d1d51",
                    fontWeight: 700,
                  }}
                  onClick={() => genFunc(navigate("/"), handleCloseNavMenu)}
                >
                  Get Started
                </Typography>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default MainNavbar;
