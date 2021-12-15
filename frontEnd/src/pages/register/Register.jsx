import './register.css'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Social.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input type="text" placeholder="Username" className="loginInput" />
                        <input type="text" placeholder="Email" className="loginInput" />
                        <input type="text" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        
                        <button className="loginRegisterButton">Already have an account</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
