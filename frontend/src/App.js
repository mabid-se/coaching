import { Route, Routes } from "react-router-dom";
import CoachesLP from "./components/Pages/CoachLP";
import CoachesListing from "./components/Pages/CoachesListing";
import CoachDetails from "./components/Pages/CoachDetails";
import SigninSignup from "./components/Pages/SigninSignup";
import PackageDetails from "./components/Pages/PackageDetails";
import { createMuiTheme, ThemeProvider } from "@mui/material";

const myTheme = createMuiTheme({
  typography: {
    fontFamily: `"Poppins" !important`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  }, 
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Routes>
        <Route exact path="/" element={<CoachesLP />} />
        <Route exact path="/coaches" element={<CoachesListing />} />
        <Route exact path="/coachDetail" element={<CoachDetails />} />
        <Route exact path="/login" element={<SigninSignup />} />
        <Route exact path="/packDetails" element={<PackageDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
