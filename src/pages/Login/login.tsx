import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';
import data from "../../json/users.json";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        customerID: '',
        password: '',
    });
    const [error, setErrorMessage] = useState('')
    const nav = useNavigate();

    const handleChange = (e: { target: { name: string; value: string; }; }) => {                
        setUserInfo({
          ...userInfo,                               
          [e.target.name]: e.target.value,          
        });
      };

      const handleOnClick = () => {
          for (var user of data.users) 
              {
                if(user.customerID === userInfo.customerID && user.password === userInfo.password){
                    console.log("YES")
                    localStorage.setItem("loggedin", "true")
                    nav('/accounts')
                }
                else{
                    setErrorMessage("Sorry incorrect details")
                }
          }
      }

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
        {error && <p className={classes.errorMsg}>{error}</p>}
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
    errorMsg:{
        color: "red"
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

