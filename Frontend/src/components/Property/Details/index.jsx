import React, { useEffect } from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewHomeById } from '../../../actions/homes';
function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const HouseData = useSelector((state) => state.homes.home);
    useEffect(() => {
        dispatch(viewHomeById(id));
    },[]);
    // const item = HouseData.home;
    // console.log("here--------", item)
    return ( HouseData && 
        <div id='page' style={{margin: "40px auto"}}>
            <Container maxWidth='xl'>
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '8px 0px 20px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <img src={HouseData.home.img_url} width="100%" height="500px"/>
                </Container>
                <Container
                    maxWidth="xl"
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #D3DEEE',
                        margin: '40px auto',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            alignSelf: 'center',
                            justifySelf: 'center',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px'
                        }}>
                        Description
                    </Typography>
                </Container>
                <Container
                    maxWidth="xl"
                    sx={{
                        background: '#E2EDF3',
                        borderRadius: '5px',
                        border: '1px solid #E2EDF3',
                        margin: '40px auto',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="h6" align="center" marginRight={15}>
                        Bedrooms: {HouseData.home.bedrooms}
                    </Typography>
                    <Typography variant="h6" align="center" marginRight={15}>
                        Bathrooms: {HouseData.home.bathrooms}
                    </Typography>
                    <Typography variant="h6" align="center" marginRight={15}>
                        Price: ${HouseData.home.price} / {HouseData.home.price_type}
                    </Typography>
                    <Typography variant="h6" align="center" marginRight={15}>
                        Size: {HouseData.home.size} (Square Feet)
                    </Typography>
                </Container>
                <Typography variant="h6" align="left">
                    {HouseData.home.description}
                </Typography>
            </Container>
        </div>
    )
}

export default Details;
