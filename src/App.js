import './index.css'
import './App.css';
import { NotFound } from 'Pages/NotFound/NotFound';
import { Hero } from 'Pages/Hero/Hero';
import { Works } from 'Pages/Works/Works';

import { About } from 'Pages/About/About';
import { useEffect } from 'react';
import { useState } from 'react';
import { Services } from 'Pages/Services/Services';
import { Route, Routes } from 'react-router-dom';
import { Reviews } from 'Pages/Reviews/Reviews';


//-----------------------------------------------------------------------------------
export function App() {
  const [yOffset, SetYOffset] = useState(0)

  




  const onScroll = (e) => {
    SetYOffset(e.currentTarget.pageYOffset)
    
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => (window.removeEventListener('scroll', onScroll))

  }, [yOffset]);

  return (
    <div className='backdrop' >
      
      <Routes>
      
        <Route index path='/'  element={<Hero />} />
        <Route path="works" element={<Works />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>


    </div>
  );
}

export default App;
