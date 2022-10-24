import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'© 2022 Instagram from Meta'}
            {/* <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '} */}
            {/* {new Date().getFullYear()} */}
            {'.'}
        </Typography>
    );
}

export default function ProfileLinks() {
    return (
        <Container sx={{ display: {md: 'flex', xs: 'none', sm: 'none'}, flexWrap: 'wrap', justifyContent: 'start' }}>
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
                Help
            </Typography>
            <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}
            >
                Press
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
                Jobs
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
                Locations
            </Typography>
            <Typography
                sx={{
                    paddingRight: 2,
                    fontSize: 11,
                    color: 'text.secondary'
                }}
            >

                Language
            </Typography>
            <br/>
            <Copyright style={{ display: "flex", marginTop: "15px", marginRight: "80px", fontSize: 11, textTransform: "uppercase", justifyContent: "start" }} />
        </Container>
    );
}