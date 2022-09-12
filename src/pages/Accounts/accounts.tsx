import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import data from "../../json/bankInfo.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import { makeStyles } from '@mui/styles';

export default function Accounts() {
  // const nav = useNavigate();
  
  // useEffect(()=>{
  //   if(!auth){
  //     nav('/')
  //   }
  // },[auth])
  const [userInfo, setUserInfo]:any = useState({})
  const classes = useStyles();
  const location:any = useLocation();
  const user: any = location.state.user;

  useEffect(()=>{
    getUserData()
  },[userInfo])

  const getUserData = () => {
    for (var account of data.accounts) 
        {
          if(account.customerID === user.customerID){
            setUserInfo(account)
            console.log(userInfo)
          }
    }
}
  
  return (
    <div className={classes.root}>
      <div className={classes.welcome}>
        <p>
          Welcome {user.customerID}
        </p>
      </div>
      <div className={classes.accountTitle}>
        <p>
          Your accounts:
        </p>
      </div>
      <AccountCard props={userInfo} />
    </div>
  );
}

function AccountCard (props:any){
  const img = require('../../images/bank.jpeg')
  const classes = useStyles();
  return (
    <>
    <div className={classes.accountsCard}>
        <Card sx={{ maxWidth: 345 }}>  
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="bank"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.props.accountName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.props.accountNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              £{props.props.balance}
            </Typography>
          </CardContent>
        </Card>
        </div>
    </>
  )
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
  welcome: {
    textAlign: "left",
    marginLeft: "15%",
    fontSize:"3rem"
  },
  accountTitle:{
    textAlign: "left",
    marginLeft: "15%",
    fontSize:"1.5rem"
  },
  accountsCard:{
    marginLeft: "15%"
  },
});
