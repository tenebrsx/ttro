import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SocialButtonsGroup from './components/SocialButtonsGroup';
import ScrollManager from './components/ScrollManager';
import ScrollTestUtils from './components/ScrollTestUtils';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <Footer />
        <SocialButtonsGroup />
        <ScrollTestUtils />
      </div>
    </Router>
  );
}

export default App;