import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';
import users from "../../json/users.json"

export default function Login() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        customerID: '',
        password: '',
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {                
        setUserInfo({
          ...userInfo,                               
          [e.target.name]: e.target.value,          
        });
      };

    return(
    <>
    <div className={classes.root}>
        <div className={classes.textBoxes}>
            <TextField name="customerID" label="Customer ID" variant="outlined" onChange={handleChange} />
            <TextField name="password" label="Password" variant="outlined" type="password" onChange={handleChange}/>
        </div>
        <div>
            <Button className={classes.button} variant="contained" onClick={handleOnClick}>Continue</Button>
        </div>
    </div>
    </>
    );

}

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 3,
        height: 48,
        textAlign:"center",
        flexDirection:"column",
        flex:1,
        position: "relative",
        marginTop: "20px!important",
    },
    image:{
        width:200,
        height:100,
    },
    textBoxes:{
        display: "block",
    },
    button:{
        width:250,
        marginTop: "20px!important",

    },
    customerIDTextBox:{
        flex:2,
    },
    passwordTextBox:{
        flex:2,   

    }
  });

