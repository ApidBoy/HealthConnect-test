import bgVideo from "../res/loginBg.mp4";
function LoginPage() {
    return <>
    <div id="loginBgContainer">
        <video autoPlay={true} loop muted src={bgVideo}></video>
    </div>
    <section id="loginPageContainer">
        <div id="loginCard">
            <div id="loginText"></div>
            <div id="textField">
                <div id="label">
                    E-mail address
                </div>
                <input type="email" />
            </div>
            <div id="textField">
                <div id="label">
                    Password
                </div>
                <input type="password" />
            </div>
        </div>
    </section>
    </>;
}

export default LoginPage;