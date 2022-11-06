import './index.css'
import './App.css';
import { Header } from 'components/Header/Header';

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
   <div className='container' >
<Header/>
   </div>
  );
}

export default App;
