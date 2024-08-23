import React,{ useEffect } from "react";
// import { Link } from 'react-router-dom';
import { Container } from "@mui/system";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Houses from "../../../data/house";
import { useDispatch, useSelector } from 'react-redux';
import { viewHomes } from "../../../actions/homes";
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';

function House() {
    const dispatch = useDispatch();
    const HousesData = useSelector((state) => state.homes.homes);
    useEffect(() => {
        dispatch(viewHomes());
    },[]);
    console.log("housedata--------", HousesData);
    return (
        <Container maxWidth="xl" sx={{ margin: "20px 0px 0px 0px" }}>
            <Grid maxWidth="xl" spacing={7} container>
              { HousesData &&
                HousesData.map((item) => {
                  return (
                    <Grid
                      key={item._id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={2.4}
                      item
                      WidthFull
                    >
                      <Card WidthFull>
                        <CardMedia
                          component="img"
                          alt=""
                          height={160}
                          image={item.img_url}
                        />
                        <CardContent>
                          <Typography variant="h6" align="center">
                            {item.title}
                          </Typography>
                          <Grid container mt={2} gap={8} justifyContent="center">
                            <div style={{display: "flex"}}>
                              <HotelIcon sx={{ fontSize: 24 }} /> 
                              <p style={{fontSize:"20px", marginLeft:"10px"}}>{item.bedrooms}</p>
                            </div>
                            <div style={{display: "flex"}}>
                              <BathtubIcon sx={{ fontSize: 24 }} /> 
                              <p style={{fontSize:"20px", marginLeft:"10px"}}>{item.bathrooms}</p>
                            </div>
                          </Grid>
                          <Grid justifyContent="center" align="center" mt={1}>
                            <p style={{fontSize:"18px", marginLeft:"10px"}}>${item.price} / {item.price_type}</p>
                          </Grid>
                        </CardContent>
                        <CardActions WidthFull justify-content="center">
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
}

export default House;
