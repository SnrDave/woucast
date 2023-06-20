
import './App.css';
import About from './components/About';
import Event from './components/Event';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Live from './components/Live';
import Navbar from './components/Navbar';
import Watch from './components/Watch';
import { Route, Routes} from 'react-router-dom';




function App() {
  return (
    <>
    <div className="App">
     <Navbar />
     <Footer />
    </div>
  <Routes>
  <Route exact path="/" element={<Event />} />
  <Route path="/about" element={<About />} />
  <Route path="/event" element={<Event/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/watch/:id" component={Watch} />
  <Route path="/Live" element={<Live/>} />
  <Route path="*" element={<NotFound />} />
</Routes>

    </>
    
  );
}

export default App;
