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
                <input placeholder="Enter your e-mail" type="email" />
            </div>
            <div id="textField">
                <input placeholder="Enter password" type="password" />
            </div>
            <div id="buttonContainer">
                <button id="loginPageButton">
                    Log in
                </button>
                <a href="/register">
                    <button id="registerButton">
                        Create a new account
                    </button>
                </a>
            </div>
            <div id="forgotPassword">
                Forgot your password?
            </div>
        </div>
    </section>
    </>;
}

export default LoginPage;