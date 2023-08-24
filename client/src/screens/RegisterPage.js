import bgVideo from "../res/loginBg.mp4";
import NavBar from "../components/NavBar";

function RegisterPage() {
    return <>
    <div id="registerBgContainer">
        <video autoPlay={true} loop muted src={bgVideo}></video>
    </div>
    <section id="loginPageContainer">
        <div id="registerCard">
            <div id="loginWelcomeText">
                Let's get started!
            </div>
            <div id="loginText">
                Register with your details
            </div>
            <div id="textField">
                <input placeholder="Your full name" type="email" />
            </div>
            <div id="textField">
                <input placeholder="Enter your e-mail" type="email" />
            </div>
            <div id="textField">
                <input placeholder="Create password (min 8 characters)" type="password" />
            </div>
            <div id="buttonContainer">
                <button id="loginPageButton">
                    Register
                </button>
                <a href="/login">
                    <button id="registerButton">
                        Login to existing account
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

export default RegisterPage;