import bgVideo from "../res/loginBg.mp4";
import NavBar from "../components/NavBar";

function LoginPage() {
    return <>
    <div id="loginBgContainer">
        <video autoPlay={true} loop muted src={bgVideo}></video>
    </div>
    <section id="loginPageContainer">
        <div id="loginCard">
            <div id="loginWelcomeText">
                Welcome back!
            </div>
            <div id="loginText">
                Enter your credentials to log in
            </div>
            <div id="textField">
                <div id="label">
                    E-mail address
                </div>
                <input placeholder="Enter your e-mail" type="email" />
            </div>
            <div id="textField">
                <div id="label">
                    Password
                </div>
                <input placeholder="Enter password" type="password" />
            </div>
            <div id="buttonContainer">
                <button id="loginPageButton">
                    Log in
                </button>
                <button id="registerButton">
                    Create a new account
                </button>
            </div>
            <div id="forgotPassword">
                Forgot your password?
            </div>
        </div>
    </section>
    </>;
}

export default LoginPage;