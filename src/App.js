import './index.css'
import './App.css';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Works } from 'components/Works/Works';
// import { Modal } from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useState } from 'react';
import { Services } from 'components/Services/Services';
// import { useRef } from 'react';

//-----------------------------------------------------------------------------------
export function App() {
  const [yOffset, SetYOffset] = useState(0)
  // const myRef =useRef()




  const onScroll = (e) => {
    SetYOffset(e.currentTarget.pageYOffset)
    // console.log(e);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => (window.removeEventListener('scroll', onScroll))

  }, [yOffset]);

  return (
    <div className='backdrop' >
      <Header />

      <Hero />

      <Works />
      <Services />
      {/* <Modal/> */}
    </div>
  );
}

export default App;
