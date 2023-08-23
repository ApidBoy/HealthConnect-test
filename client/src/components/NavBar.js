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
                <div id="navItems">
                    <a className="navItem" href="/">
                        Home
                    </a>
                    <a className="navItem" href="/about">
                        About us
                    </a>
                    <a className="navItem" href="/services">
                        Our services
                    </a>
                    <a className="navItem" href="/contact">
                        Contact us
                    </a>
                </div>
                <a href='/login'>
                    <button id="loginButton">
                        Login now
                    </button>
                </a>
            </div>
        </div>
        </nav>;
}

export default NavBar;