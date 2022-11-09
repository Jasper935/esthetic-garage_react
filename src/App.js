import './index.css'
import './App.css';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useRef } from 'react';

//-----------------------------------------------------------------------------------
export function App() {
  // const [yOffset, SetYOffset] = useState(0)
  // const myRef =useRef()




  // const onScroll = (e) => {
  //   SetYOffset(e.currentTarget.pageYOffset)
  //   console.log(e);
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll)

  //   return () => (window.removeEventListener('scroll', onScroll))

  // }, [yOffset]);
  // onWheel={onScroll}
  return (
    <div className='backdrop' >
      <Header />
      <Hero />
      <Hero />
    </div>
  );
}

export default App;
