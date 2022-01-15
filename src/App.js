import './App.css';
import {Helmet} from 'react-helmet';
import LogIn from "./pages/logIn";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

function App() {

  return (
    <div>
      <Helmet>
        <style>{'body {  background-image: linear-gradient(to right, rgba(255, 0, 0, 0.034), rgb(211, 119, 119));}'}</style>
      </Helmet> 
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>

        </Routes>
      </div>
    </Router>

      
      {/* <LogIn/> */}
      {/* <Home/> */}
      

    </div>

  );
}

export default App;
