
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import LoginPage from './pages/LoginPage';


function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <BrowserRouter>
        <Navbar loginWithRedirect={loginWithRedirect}  logout={ logout} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/admin' element= {<LoginPage isAuthenticated={isAuthenticated} />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
