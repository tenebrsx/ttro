import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/ui/FloatingActionButton";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import OrderTracking from "./pages/OrderTracking";
import UIShowcase from "./pages/UIShowcase";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/order-tracking/:orderId?"
              element={<OrderTracking />}
            />
            <Route path="/ui-showcase" element={<UIShowcase />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </Router>
  );
}

export default App;
