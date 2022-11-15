import css from './About.module.css'
import { Header } from 'components/Header/Header'
// import { Socials } from 'components/Socials/Socials'
//---------------------------------------------------
export const About=()=>{


    return(
        <section className={css.about}>
            <Header text='Домашня' location={'/'} activeId={4}/>

    
        </section>
    )
}