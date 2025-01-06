import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section_1 from './components/Section_1';
import Section_7 from './components/Section_7';
import Section_8 from './components/Section_8';
import Section_10 from './components/Section_10';
import Section_11 from './components/Section_11';
import Section_2 from './components/Section_2';
import Section_4 from './components/Section_4';
import Section_3 from './components/Section_3';

function App() {
  const [slider,setSlider] = useState(0);

  return (
    <div className='w-[100vw] overflow-x-hidden bg-[#fff9ee]'>
      <header>
          <Header 
            setSlider={setSlider}
          />
          <Sidebar slider={slider} setSlider={setSlider} />
          <Navbar/>
          <Section_3/>
      </header>
      <main>
        <Section_1/>
        <Section_2/>
        <Section_4/>
        <Section_7/>
        <Section_8/>
        <Section_10/>
        <Section_11/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default App
