import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function ButtonTypography() {
    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Typography
            sx={{
                paddingRight: 2,
                fontSize: 11,
                color: 'text.secondary'
            }}
        >
                Meta
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >
            About
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}
        >
            Blog
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }} 
        >
                Jobs
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >
            Help
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >
            API
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}
        >
            Privacy
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }} 
        >
            Terms
        </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >
            Home
            </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >
            Top Accounts
            </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >
            Hashtags
            </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >

                Locations
            </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >

                Instagram Lite
            </Typography>
        <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}  
        >

                Contact Uploading & Non-Users
            </Typography>
        </Container>
    );
}