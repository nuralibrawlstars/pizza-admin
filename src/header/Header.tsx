import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>Pizza Admin</h1>
        <nav>
         <ul>
          <li>
            <NavLink to="/dishes"></NavLink>

          </li>

          <li>
            <NavLink to="/orders"></NavLink>
            
          </li>

         </ul>

        </nav>
        </header>
    )
}
export default Header