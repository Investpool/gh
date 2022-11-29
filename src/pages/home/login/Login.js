import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
          <div className="loginLeft">
              <h3 className="loginLogo">GhanaChat</h3>
              <span className="loginDesc">
                  Connect with friends around Ghana and the World on GhanaChat
              </span>
          </div>
          <div className="loginRight">
              <div className="loginbox">
                  <input placeholder="Email" name="email" className="loginInput"  />
                  <input placeholder="Password" type="password" className="loginInput"/>
                  <button className="loginButton">Log In</button>
                  <span className="loginForgot">Forgot Password?</span>
                  <button className="loginRegisterButton">
                      Create a New Account
                  </button>
              </div>
          </div>
      </div>
    </div>
  )
}
