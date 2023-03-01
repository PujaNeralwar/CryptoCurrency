import { makeStyles } from '@material-ui/core';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));


function App() {
  
  const classes = useStyles();
  return (
    <div className={classes.App}>
    <BrowserRouter>
     <div>
      <Header />
      <Routes>
      <Route  path="/" index element={<Homepage />} exact />
      <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
