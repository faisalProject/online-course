// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// bootstrap icons
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import './main.css';
import Header from './component/Header';
import Home from './pages/Home';
import Mobile from './component/Mobile';

// react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Mobile />
      </BrowserRouter>
    </>

  );
}

export default App;
