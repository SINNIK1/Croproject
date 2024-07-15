// This is the main component of the application. It contains the Hero component and the Footer component.
import './App.css';
import Hero from './Components/Hero/hero';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
