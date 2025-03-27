import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"

const Header = () => {
    return (
        <header className={s.header}>
            <h1 className={s.title}>Pizza Admin</h1>
        <nav className={s.nav}>
         
            <NavLink to="/dishes" className={({isActive}) => (isActive ? `${s.active} ${s.link}` : `${s.link}`)}>Dishes</NavLink>
            <NavLink to="/orders"  className={({isActive}) =>(isActive ? `${s.active} ${s.link}` : `${s.link}`)}>Orders</NavLink>
            
        </nav>
        </header>
    )
}
export default Header