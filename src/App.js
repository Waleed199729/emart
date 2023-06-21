import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import AnimatedRoutes from './AnimatedRoutes';




function App() {
  
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
