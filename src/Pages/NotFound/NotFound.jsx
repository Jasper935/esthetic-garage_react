import css from "./NotFound.module.css"
import { useNavigate } from "react-router-dom"



export const NotFound =()=>{
    const navigate = useNavigate()
    return(
        <div className={css.notFound}>
            <h2 className={css.title}>
                Такої сторінки не існує
            </h2>
            <button className={css.btn} onClick={()=>navigate('/')}> Повернутися на головну ↑</button>
        </div>
    )
}