import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Container } from '@mui/material';
import FullWidthTabs from '../components/Tabs/Tabs';
import ResponsiveAppBar from '../components/AppBar';
import AppBarMobile from '../components/AppBarMobile';
import FixedBottomNavigation from '../components/BottomNav'
import ProfileNav from '../components/Tabs/ProfileNav';


const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396 k views',
        createdAt: 'a week ago',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40 M views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
];

function Media(props) {

    return (
        <Grid container wrap="nowrap" >
            {( data).map((item, index) => (
                <Box key={index} sx={{ width: '30vw', margin: 1 }}>
                    {(
                        <img
                            style={{ width: '30vw', height: 'auto' }}
                            alt={item.title}
                            src={item.src}
                        />
                    )}

                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function UserProfile() {
    return (
        <>
            <ResponsiveAppBar />
            <AppBarMobile />
            <FullWidthTabs />
            {/* <ProfileNav/> */}
        <Container sx={{ overflow: 'hidden' }}>
            {/* <FixedBottomNavigation /> */}
            
            </Container>
        </>
    );
}
