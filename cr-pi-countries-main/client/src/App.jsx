import { Detail, Form, Home, Landing } from "./views";
import style from "./App.module.css"


import { Route, Routes, useLocation  } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";

import PropTypes from 'prop-types';


  


function App() {



  const location = useLocation()
  return (
    <div className={style.app}>
      {location.pathname !== "/" && <NavBar />}
    
     <Routes>
     <Route exact path="/" element={<Landing/>}/>
     <Route exact path="/detail/:id" element={<Detail/>}/>
     <Route exact path="/form" element={<Form/>}/>
      <Route exact path="/home" element={<Home />}/>
     </Routes>
    </div>
  );
}

Home.propTypes = {
  countries: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default App;
