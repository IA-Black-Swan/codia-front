import "./login.scss"


export const Login = () => {
    return (
        <div id="login">
           <div className="login__card">
                <div className="login__card-header">

                </div> 

                <div className="login__card-body">
                    <p className="login__card-body-title">
                        Login
                    </p>

                    <form class="login__form">
                        <input class="login__form-box" placeholder="Email" type="email"/><br/>
                        <input class="login__form-box" placeholder="Password" type="password"/><br/>
                        <input class="login__form-button" type="submit" value="Login"/>
                    </form> 
                </div>

                <div className="login__card-footer">

                </div>
           </div>
        </div>
    )
}