import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
//import './BottomNav.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AccountBoxOutlined, AddBoxOutlined, FavoriteBorder, Home, AccountCircleOutlined, HomeOutlined } from '@mui/icons-material';
import Search from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';




export default function ProfileNav() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) navigate("/");
        else if (value === 1) navigate("/movies")
        else if (value === 2) navigate("/tvseries")
        else if (value === 3) navigate("/search")

    }, [value, navigate])





    return (
        <Box sx={{ display: { md: 'none' }, pb: 7 }} ref={ref}>
            <CssBaseline />

            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ backgroundColor: 'white' }}
                >
                    <BottomNavigationAction style={{ color: "black" }} icon={<HomeOutlined />} />
                    <BottomNavigationAction style={{ color: "black" }} icon={<Search />} />
                    <BottomNavigationAction style={{ color: "black" }} icon={<AddBoxOutlined />} />
                    <BottomNavigationAction style={{ color: "black" }} icon={<FavoriteBorder />} />
                    <BottomNavigationAction style={{ color: "black" }} icon={<AccountCircleOutlined />} />
                </BottomNavigation>
            </Box>
        </Box>
    );
}

