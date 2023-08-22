import NavBar from "../components/NavBar";
import bgVideo from "../res/bg.mp4";
import doctors from "../res/doctors.png";
import medicines from "../res/medicines.png";
import appointment from "../res/appointment.png";
import dashboard from "../res/dashboard.png";
import oneToOne from "../res/one-to-one.png";
import logo from '../res/logo.png';

function Homepage() {
    return <>
    <NavBar />
    <section id="heroSection">
        <div id="bgContainer">
            <video autoPlay={true} loop muted src={bgVideo}></video>
        </div>
        <div id="heroContainer">
            Your health, at your fingertips
            <div id="heroDescription">
                Blah blah blah, I wanna play valorant and overwatch all day but I gotta code the whole fucking day.
            </div>
            <div id="searchContainer">
                <input placeholder="Search for doctors, treatments, etc" id="searchBox" />
                <button id="searchButton">
                    Search
                </button>
            </div>
        </div>
        <div id="features">
                <div id="featureCard">
                    <img id="featureArt" alt="" src={doctors} />
                    <div id="featureText">
                        Find doctors near you
                    </div>
                    <div id="featureDescription">
                        Find doctors near you
                    </div>
                </div>
                <div id="featureCard">
                    <img id="featureArt" alt="" src={medicines} />
                    <div id="featureText">
                        Search for medicines
                    </div>
                    <div id="featureDescription">
                        Search for medicines
                    </div>
                </div>
                <div id="featureCard">
                    <img id="featureArt" alt="" src={appointment} />
                    <div id="featureText">
                        Book appointments
                    </div>
                    <div id="featureDescription">
                        Book appointments
                    </div>
                </div>
                <div id="featureCard">
                    <img id="featureArt" alt="" src={dashboard} />
                    <div id="featureText">
                        Personalized dashboard
                    </div>
                    <div id="featureDescription">
                        Personalized dashboard
                    </div>
                </div>
                <div id="featureCard">
                    <img id="featureArt" alt="" src={oneToOne} />
                    <div id="featureText">
                        One-to-one experience
                    </div>
                    <div id="featureDescription">
                        One-to-one experience
                    </div>
                </div>
                <div id="moreCards">
                    Explore more
                </div>
            </div>
    </section>
    <footer className="text-gray-400 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <img id="hcFooterLogo" alt="HealthConnect logo" src={logo} />
                <span className="ml-3 text-xl">HealthConnect</span>
            </a>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 HealthConnect —
                <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">Team QuarkBytes</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-gray-400">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-400">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-400">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </span>
        </div>
    </footer>
    </>;
}

export default Homepage;