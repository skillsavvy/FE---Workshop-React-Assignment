import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects />
      <About />
      <Cards />
      <Form />
      <Location />
      <Footer />
    </div>
  );
}

export default App;