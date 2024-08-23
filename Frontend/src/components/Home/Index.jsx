import React from "react";
import { Box } from "@mui/system";
import {
  MenuItem,
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import { orange } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import BorderAllIcon from "@mui/icons-material/BorderAll";
import HouseIcon from "@mui/icons-material/House";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Client from "./Clients/Index";
import "./Index.scss";
import { useState } from "react";

const propertyOptions = [
  {
    type: "All Residentials",
    icon: <BorderAllIcon style={{ color: "#443D66" }} />,
  },
  {
    type: "Home",
    icon: <HouseIcon style={{ color: "#443D66" }} />,
  },
  {
    type: "Apartment",
    icon: <ApartmentIcon style={{ color: "#443D66" }} />,
  },
  {
    type: "Building",
    icon: <LocationCityIcon style={{ color: "#443D66" }} />,
  },
];
const userInterest = [
  { type: "buy" },
  { type: "sell" },
  { type: "rent" },
  { type: "pg" },
];

function Home() {
  const showUP780 = useMediaQuery("(min-width: 780px)");  // Corrected the typo in "min-width"
  
  const optionArea = 40; // Changed to a numeric value
  const [option, setOption] = useState("All Residentials");

  async function handleChange(event) {
    setOption(event.target.value);
    console.log(option);
  }

  return (
    <div>
      <Box
        maxWidth={"xl"}
        alignSelf="center"
        style={{
          margin: "20px auto",
        }}
        
      >
        <Grid container mt={2} mb={10} spacing={10}>
          <Grid item lg={6}>
            <Typography align="justify" fontSize={"28px"} mt={5} paddingX={15} pt={10}>
            <HomeIcon sx={{ color: orange[500] }} /> Real Estate
            </Typography>
            <Typography variant="h2" paddingLeft={14} pt={6}>
              <span className="font-link">Find Your Dream House By Us</span>
            </Typography>
          </Grid>
          <Grid
            item
            md={12}
            lg={6}
          >
            <img src="./assets/image/hero-banner.png" alt="Modern house model" class="w-100" />
          </Grid>
        </Grid>
      </Box>
      
      <Container maxWidth="xl">
        <Container maxWidth="xl">
          <Typography variant="h5" component="h1" align="center" marginY={1}>
            Our Clients and Reviews
          </Typography>
          <Client />
        </Container>
      </Container>
    </div>
  );
}

export default Home;
