import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GhanaChat</h3>
          <span className="loginDesc">
            Developing our Communities with Passion
          </span>
        </div>
        <div className="loginRight">
          <div className="loginbox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Region" className="loginInput" />
            <input placeholder="District" className="loginInput" />
            <input placeholder="Community" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
