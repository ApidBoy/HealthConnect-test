import logo from '../res/logo.png';
function NavBar() {
    return <nav>
        <div id="navContainer">
            <div id="logoContainer">
                <div id="hcLogoContainer">
                    <img id="hcLogo" alt="HealthConnect logo" src={logo} />
                </div>
                <div id="headingText">
                    HealthConnect
                </div>
            </div>
            <div id="navigationContainer">
                <a href="/">
                    Home
                </a>
                <a href="/about">
                    About us
                </a>
                <a href="/services">
                    Our services
                </a>
                <a href="/contact">
                    Contact us
                </a>
                <button id="loginButton">
                    Login now
                </button>
            </div>
        </div>
        </nav>;
}

export default NavBar;