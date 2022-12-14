// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// bootstrap icons
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

// fontawesome
import '../node_modules/font-awesome/css/font-awesome.min.css';

// sweetalert2
import '../node_modules/sweetalert2/dist/sweetalert2.min.js';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './main.css';
import Header from './component/Header';
import Home from './pages/Home';
import Mobile from './component/Mobile';
import SigninPopup from './component/SigninPopup';
import Register from './pages/Register';
import Footer from './component/Footer';

// react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        <SigninPopup />
        <Mobile />
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
