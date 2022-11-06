import css from './Par.module.css';
import { Parallax,  } from 'react-parallax';

export const Par = () => {
  return (
    <>
      <Parallax
        // blur={10}
        bgImage="https://cdn.pixabay.com/photo/2016/11/29/11/39/computer-1869236_960_720.jpg"
        bgImageAlt="the cat"
        speed={20}
        strength={300}
        style={{height:'100vh'}}
      >
        <img className={css.img} src="https://cdn.pixabay.com/photo/2016/11/29/11/39/computer-1869236_960_720.jpg" alt="" />
      </Parallax>
      <Parallax
        // blur={10}
        bgImage="https://cdn.pixabay.com/photo/2015/05/04/21/33/tree-753069_960_720.jpg"
        bgImageAlt="the cat"
        strength={350}
        style={{height:'100vh'}}
      >
        Content goes here. Parallax height grows with content height.
      </Parallax>
      <Parallax
        
        bgImage="https://cdn.pixabay.com/photo/2016/11/19/20/16/astronaut-1840936_960_720.jpg"
        bgImageAlt="the cat"
        strength={300}
        style={{height:'100vh'}}
      >
        Content goes here. Parallax height grows with content height.
      </Parallax>
    </>
  );
};
