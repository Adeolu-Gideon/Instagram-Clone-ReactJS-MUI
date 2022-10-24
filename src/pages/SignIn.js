import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import instagramlogo from '../assets/instagramlogo.png';
import Appstore from '../assets/Appstore.png'
import Playstore from '../assets/Playstore.png'
import ButtonLink from '../components/FooterLinks';
import Divider from '@mui/material/Divider';
import { Facebook} from '@mui/icons-material';


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
const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#fff', marginTop: 5, paddingBottom: 5,  border: "1px solid #dbdbdb"}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    
                        <img
                            src={instagramlogo}
                            alt="instagram logo"
                        style={{
                            height:"auto",
                            width:150,
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                           
                        }}
                        />
                        
                    
                
                    {/* <Typography component="h1" variant="h5">
                        Sign in
                    </Typography> */}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Phone number, username or email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                           
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Log In
                        </Button>
                        
                        <Divider >
                            <Typography color='text.secondary' variant='subtitle1'>OR</Typography>
                        </Divider>
                        
                        <Grid container sx={{display: 'flex', justifyContent: 'center'}}>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 2, mb: 2 }}
                            ><Facebook sx={{ color: 'white', mr: 1, my: 0.5 }} />
                                Log In with facebook
                            </Button>
                        </Box>
                    </Box>
                </Box>
                
            </Container>
            <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#fff', marginTop: 2, paddingBottom: 2, border: "1px solid #dbdbdb" }}>
                {/* <Link href="#" variant="body2">
                    <Typography align="center" mt>Don't have an account? Signup</Typography>
                </Link> */}
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item>
                        <Typography align="center" mt>Don't have an account?
                            <Link href="#" variant="body2">
                                Signup
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xs" style={{ justifyContent: "center", alignItems: "center"}}>
                        <Typography align="center" mt>Get the app.</Typography>
                <Grid container style={{ justifyContent: "center", alignItems: "center" }}>
                        <Grid item style={{ justifyContent: "center", alignItems: "center" }}>
                            <img src={Appstore} alt="appstore"
                                style={{
                                    height: 32,
                                    width: 120,
                                    
                                }} />
                            
                                    <img src={Playstore} alt="playstore"
                                        style={{
                                            height: "auto",
                                            width: 120,
                                            
                                        }} />
                                    
                                </Grid>
                </Grid>
            </Container>
                
            <ButtonLink/>
                
            <Copyright sx={{ mt: 4, mb: 2 }} />
        </ThemeProvider>
    );
}