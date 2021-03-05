import "./login.scss"
import React from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import { FormControl, InputAdornment, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    input: {
        width: '80%',
        fontSize: '1.3rem',
        padding: '0.4rem'
        
    },

    field: {
        alignItems: 'center',
        marginTop: '1rem',
        marginBottom: '1rem'
    }
}));


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

                    <div className="form">
                        <FormControl className={classes.margin, classes.field}>    
                            <Input
                            classes={{ root: classes.input }}
                            id="input-with-icon-adornment"
                            placeholder="Email"
                            type="email"
                            startAdornment={
                                <InputAdornment position="start">
                                <PersonOutlineOutlinedIcon fontSize="large" />
                                
                                </InputAdornment>
                            }
                            />
                        </FormControl>

                        <FormControl className={classes.margin, classes.field}>    
                            <Input
                            classes={{ root: classes.input }}
                            id="input-with-icon-adornment"
                            placeholder="Password"
                            type="password"
                            startAdornment={
                                <InputAdornment position="start">
                                    
                                <HttpsOutlinedIcon fontSize="large" />
                                </InputAdornment>
                            }
                            />
                        </FormControl>
                    </div>

                    <Button variant="contained" color="primary">Login</Button>
                </div>

                <div className="login__card-footer"></div>
            </div>
        </div>
    )
}