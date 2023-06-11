import React, {useEffect, useState} from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import keepsake from '../../images/Keepsake.png';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(null);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/auth');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
      
        if (token) {
          const decodedToken = decode(token);
      
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
      
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

        return(
            <AppBar className={classes.appBar} position='static'>
            <div>
                <Typography component={Link} to="/" className={classes.heading}>Keepsake</Typography>
                <img className={classes.image}src={keepsake} alt="keepsake" height="60" />
            </div>
                <Toolbar className={classes.toolbar}>
                    {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar alt={user?.result.given_name || user?.result.name} src={user?.result.picture}>{user?.result.given_name || user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{`${user?.result.given_name} ${user?.result.family_name}` && `${user?.result.name}`}</Typography>                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                    ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        )
};

export default Navbar;