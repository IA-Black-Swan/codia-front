import "./login.scss"
import { FaGithub, FaKey, FaUser } from "react-icons/fa";


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
                        <div className="login__form-input">
                            <FaUser size="1.5em" />
                            <input class="login__form-box" placeholder="Email" type="email"/><br/>
                            <span class="fa fa-info-circle errspan"></span>
                        </div>

                        <div className="login__form-input">
                            <FaKey size="1.5em" />
                            <input class="login__form-box" placeholder="Password" type="password"/><br/>
                        </div>
                    
                        <input class="login__form-button" type="submit" value="Login"/>
                    </form> 
                </div>

                <div className="login__card-footer">

                </div>
           </div>
        </div>
    )
}