import { NavLink } from "react-router-dom";

const SignIn = () =>{
    return(
        <div className="sign-in-area">
            <form className="sign-in-form" action="/config" method="POST" autoComplete="off">
                <div className="sign-in-field-block">
                    <input className="sign-field nick" type="text" name="nick" placeholder="Псевдоним"/>
                    <input className="sign-field password" type="password" name="password" placeholder="Пароль"/>     
                </div>       
                <div className="sign-in-buttons">
                    <button className="sign-in-button" type="submit">Войти</button>
                    <NavLink className='link-from-sing-in-to-up' to='/config/signup'>Регистрация</NavLink>
                </div>
            </form>
        </div>
    );
}
export default SignIn;