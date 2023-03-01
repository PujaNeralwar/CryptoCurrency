import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {makeStyles,createTheme} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';



const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize:30,
    cursor: "pointer",
    
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#14161a",
    },
    type: "dark",
  },
});


const Header = () => {
  const classes = useStyles();
 const history = useNavigate();
const {currency, setCurrency }=CryptoState();
  
// console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='primary' position='static'>
    <Container>
      <Toolbar>
        <Typography onClick={() => history("/")}  varient="h6" className={classes.title}>
          Crypto Currency
        </Typography>
        <Select variant='outlined'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{width:100,height:40,marginLeft:15,}}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
         >
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'INR'}>INR</MenuItem>
        </Select>
      </Toolbar>
    </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header;