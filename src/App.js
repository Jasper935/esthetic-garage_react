import './index.css'
import './App.css';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

//-----------------------------------------------------------------------------------
export function App() {
  const [yOffset, SetYOffset] = useState(0)
  const myRef =useRef()

 const onScroll = (e) => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    SetYOffset(pr=>SetYOffset(pr+1))
    // console.log(yOffset);
    // console.log(`onScroll, window.scrollY: ${scrollY} `)
    console.dir(e.target);
   
  }


  // const onScroll = (e) => {
  //   SetYOffset(e.currentTarget.pageYOffset)
  //   console.log(e);
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll)
    
  //   return () => (window.removeEventListener('scroll', onScroll))
    
  // }, [yOffset]);

  return (
   <div onWheel={onScroll}   className='backdrop' >
<Header/>
<Hero/>
<Hero/>
   </div>
  );
}

export default App;
