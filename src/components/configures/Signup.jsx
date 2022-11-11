const SignUp = () =>{
    return(
        <div className="sign-up-area">
            <form  className="sign-up-form" action="/config" method="POST">
                <div className="sign-up-field-block">
                    <input className="sign-field nick" type="text" name="nick" placeholder="Псевдоним"/>
                    <input className="sign-field password" type="password" name="password" placeholder="Пароль"/> 
                    <input  type="email" className="sign-field email" name="email" placeholder="some@email.com"/>
                </div>
                <div className="sign-up-buttons">
                    <button className="sign-in-button" type="submit">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;