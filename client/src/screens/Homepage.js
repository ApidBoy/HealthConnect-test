import NavBar from "../components/NavBar";
import bgVideo from "../res/bg.mp4";
import doctors from "../res/doctors.png";
import medicines from "../res/medicines.png";
import appointment from "../res/appointment.png";
import dashboard from "../res/dashboard.png";
import oneToOne from "../res/one-to-one.png";
import Footer from "../components/Footer";

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
                <a href="/search">
                    <button id="searchButton">
                        Search
                    </button>
                </a>
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
    <Footer />
    </>;
}

export default Homepage;