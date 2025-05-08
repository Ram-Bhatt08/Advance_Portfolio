import Hero from './Components/Hero/Hero';
import Orbit from './Components/Orbit/Orbit';
import Door from './Components/BlackHolePortal/BlackHolePortal';
import Treasure from './Components/Treasure/Treasure';
// import Header from './Components/Header/Header';
import Footer from './Components/footer/footer';
import './App.css';
function App() {
  return (
    <div className="app">
      {/* <Header/> */}
      <Hero/>
      <Treasure />
      <Door />
      <Orbit />
      <Footer />
    </div>
  );
}

export default App;