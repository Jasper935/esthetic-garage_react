import './index.css'
import './App.css';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';

//-----------------------------------------------------------------------------------
export function App() {
  // const [yOffset, SetYOffset] = useState(0)

  // const onScroll = (e) => {
  //   SetYOffset(e.currentTarget.pageYOffset)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll)
  //   return () => (window.removeEventListener('scroll', onScroll))
  // }, [yOffset]);

  return (
   <div className='backdrop' >
<Header/>
<Hero/>
   </div>
  );
}

export default App;
