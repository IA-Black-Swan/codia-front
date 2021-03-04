import "./login.scss"
import React from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import { Grid, TextField, FormControl, InputAdornment, InputLabel, Input, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';


// botones
const useStyles = makeStyles(theme => ({
    grid: {
        width: '90%',
    },
    textField: {
        width: '100%',
    }
}));

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));



/*
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));
*/

export const Login = () => {

    const classes = useStyles();

    return (
        <div id="login">
            <div className="login__card">
                <div className="login__card-header"></div>

                <div className="login__card-body">
                    <p className="login__card-body-title">
                        Login
                    </p>

                    {/*
                    <form class="login__form">
                        <div className="login__form-input">
                            <FaUser size="1.5em" />
                            <input class="login__form-box" placeholder="Email" type="email"/><br/>
                        </div>

                        <div className="login__form-input">
                            <FaKey size="1.5em" />
                            <input class="login__form-box" placeholder="Password" type="password"/><br/>
                        </div>
                    
                        <input class="login__form-button" type="submit" value="Login"/>
                    </form> 
                    */}

                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <PersonOutlineOutlinedIcon fontSize="large" />
                            </Grid>
                            <Grid item classes={{ root: classes.grid }}>
                                <TextField classes={{ root: classes.textField }} id="input-with-icon-grid" label="Email" />
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <HttpsOutlinedIcon fontSize="large" />
                            </Grid>
                            <Grid item classes={{ root: classes.grid }}>
                                <TextField classes={{ root: classes.textField }} id="input-with-icon-grid" label="Password" />
                            </Grid>
                        </Grid>
                    </div>

                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </div>

                <div className="login__card-footer"></div>
            </div>
        </div>
    )
}