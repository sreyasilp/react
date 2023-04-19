import './App.css';
import { Home } from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { ContactUs } from './pages/contact';
import { Services } from './pages/services';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
