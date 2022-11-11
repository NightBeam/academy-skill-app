import { NavLink } from "react-router-dom";
import userIcon from './images/UserIcon.svg'
import siteIcon from './images/SiteIcon.svg';

const Header = () =>{
    return(
        <header>
            <div className="main-header">
                <div className="site-icon">
                    <img src={siteIcon} alt="Site" />
                </div>
                <nav>
                    <NavLink className='main-link' to='/news'>Новости</NavLink>
                    <NavLink className='main-link' to='/plays'>Игры</NavLink>
                    <NavLink className='main-link' to='/contacts'>Контакты</NavLink>
                    <NavLink className='main-link' to='/discussions'>Обсуждения</NavLink>
                </nav>
                <div className="user-icon">
                    <NavLink className='user-link' to='/users/mathew'><img src={userIcon} alt="User"/></NavLink>
                </div>
            </div>
        </header>
    );
}
export default Header;