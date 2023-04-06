import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutme from './pages/aboutme';
import Projects from './pages/Projects';
import Qualification from './pages/qualification';
import Skills from './pages/skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/Aboutme' element={<Aboutme/>}/>
      <Route path='/Qualification' element={<Qualification/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
