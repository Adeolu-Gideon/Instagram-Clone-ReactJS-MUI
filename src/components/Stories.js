import * as React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import electronics from '../assets/electronics.png'
import fashion from '../assets/fashion.png'
import office from '../assets/office.png'
import health from '../assets/health.png'
import phones from '../assets/phones.png'
import computing from '../assets/computing.png'
import groceries from '../assets/groceries.png'
import accessories from '../assets/accessories.jpg'
import { Avatar, Box } from "@mui/material";
import '../components/Stories.css'
import Grid from '@mui/material/Grid';


const Stories = () => {
    
    const properties = {
        duration: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        indicators: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        
            <Grid spacing={1} >
                <Grid item xs={12} md={8} style={{width: '100%'}}>
                    <Box sx={{ 
                        border: '1px solid #dbdbdb', borderRadius: '10px'
                    }}>
                        <Slide {...properties}>
                        <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={electronics} alt='story' /></Avatar>
                            <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={fashion} alt='story' /></Avatar>
                            <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={office} alt='story' /></Avatar>
                            <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={health} alt='story' /></Avatar>
                            <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={accessories} alt='story' /></Avatar>
                            <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={phones} alt='story' /></Avatar>
                            <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={computing} alt='story' /></Avatar>
                            <Avatar className="story" style={{ width: '80px', height: '80px' }}><img src={groceries} alt='story' /></Avatar>
                        </Slide>
                    </Box>
                    
                </Grid>
            </Grid>
            
    );
};

export default Stories;