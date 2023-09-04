import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Avatar,
    Badge,
    InputBase,
    Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const appBarStyle = {
    backgroundColor: '#FFFFFF', 
    boxShadow: 'none',
};

const searchStyle = {
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: '#E5E5E5',
    '&:hover': {
        backgroundColor: '#CCCCCC',
    },
    marginRight: '16px',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
};

const searchIconStyle = {
    padding: '10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const inputInputStyle = {
    padding: '10px',
    paddingLeft: '40px',
    width: '100%',
};

const badgeStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
};

const NavBar = () => {
    return (
        <AppBar position="static" style={appBarStyle}>
            <Toolbar>
                <div style={{ ...searchStyle, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={searchIconStyle}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search..."
                        style={inputInputStyle}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <Box sx={{ marginLeft: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton color="inherit">
                            <Badge badgeContent={3} color="error" style={badgeStyle}>
                                <NotificationsIcon sx={{ color: 'grey' , margin: '3px'}} />
                            </Badge>
                        </IconButton>

                        <Avatar alt="User" src="/path-to-avatar.jpg" sx={{margin: '6px'}} />
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
