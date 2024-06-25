import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages 
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
              />
            <Route
              path="About"
              element={<About />}
              />
            <Route
              path="Portfolio"
              element={<Portfolio />}
              />
            <Route
              path="Contact"
              element={<Contact />}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
