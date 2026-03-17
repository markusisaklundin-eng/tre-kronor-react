import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Meny from './pages/Meny';
import Dagens_lunch from './pages/Dagens_lunch';
import Kontakt from './pages/Kontakt';
import Om_oss from './pages/Om_oss';
import Extra from './pages/Extra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meny" element={<Meny />}/>
        <Route path="/dagens_lunch" element={<Dagens_lunch/>}/> 
        <Route path="/kontakt" element={<Kontakt/>}/> 
        <Route path="/om_oss" element={<Om_oss/>}/> 
        <Route path="/extra" element={<Extra/>}/>
      </Routes>
    </Router>
  );
}

export default App;