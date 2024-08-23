import { Container } from "@mui/system";
import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
// import LandData from "../../../data/land";
import { viewLands } from "../../../actions/lands";

const Land = () => {
  const dispatch = useDispatch();
    const LandData = useSelector((state) => state.lands.lands);
    useEffect(() => {
        dispatch(viewLands());
    },[]);
    console.log("LandsData--------", LandData);
  return (
    <Container maxWidth="xl" sx={{ margin: "10px 0px 0px 0px" }}>
      <Grid container spacing={5}>
        {{ LandData } &&
          LandData.map((item) => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3} xl={2.4} key={item._id} item>
                <Card>
                  <CardMedia component="img" image={item.img_url} height="200" />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {item.title}
                    </Typography>
                    
                    <Grid justifyContent="center" align="center" mt={1}>
                      <p style={{fontSize:"18px", marginLeft:"10px"}}>${item.price} / {item.price_type}</p>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    {/* <Button
                      sx={{
                        textAlign: "bottom",
                        paddingBottom: "0px",
                        postion: "relative",
                        left: "0px",
                        marginBottom: "0px",
                      }}
                      fullWidth
                    >
                      Location
                    </Button> */}
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "12px",
                        positon: "relative",
                        right: "0px",
                        textTransform: "none",
                      }}
                      href={`/details/${item._id}`}
                      fullWidth
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Land;
