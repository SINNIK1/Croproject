// This is the main component of the application. It contains the Hero component and the Footer component.
import './App.css';
import Hero from './Components/Hero/hero';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
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
