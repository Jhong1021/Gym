import './App.css';
import Banner from './component/Banner';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Pricing from './component/Pricing';
import Testimony from './component/Testimony';
import Trainer from './component/Trainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Banner />
      <Trainer />
      <Pricing />
      <Testimony />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
