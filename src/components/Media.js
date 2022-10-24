import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    },
];

function Media(props) {

    return (
        <Grid container wrap="nowrap" >
            {(data).map((item, index) => (
                <Box key={index} sx={{ width: '30vw', margin: 0.2, overflow: 'hidden' }}>
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

export default function MediaGrid() {
    return (
        <>
           
            <Container sx={{ overflow: 'hidden' }}>
                <Media />
                <Media />
                <Media />
            </Container>
        </>
    );
}
