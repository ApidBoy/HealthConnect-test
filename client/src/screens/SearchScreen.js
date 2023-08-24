import bgVideo from "../res/loginBg.mp4";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function SearchScreen() {
    return <>
    <section id="searchScreenContainer">
        <div id="searchPageBoxContainer">
            <input placeholder="Search for doctors, medicines, etc" id="searchPageBox" />
            <button id="searchPageButton">
                <span class="material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
        <div id="totalSearchResults">
            30 results found for "typhoid"
        </div>
        <div id="resultCategoryContainer">
            <button className="activeButton">Doctors</button>
            <button>Medicines</button>
            <button>Treatments</button>
            <button>Hospitals</button>
        </div>
        <div id="searchResultsContainer">
            <div id="doctorSearchResult">
                <div id="doctorPic"></div>
                <div id="doctorInfo">
                    <div id="doctorText"></div>
                    <div id="doctorDescription"></div>
                </div>
                <button>Book now</button>
            </div>
            <div id="doctorSearchResult">
                <div id="doctorPic"></div>
                <div id="doctorInfo">
                    <div id="doctorText"></div>
                    <div id="doctorDescription"></div>
                </div>
                <button>Book now</button>
            </div>
            <div id="doctorSearchResult">
                <div id="doctorPic"></div>
                <div id="doctorInfo">
                    <div id="doctorText"></div>
                    <div id="doctorDescription"></div>
                </div>
                <button>Book now</button>
            </div>
            <div id="doctorSearchResult">
                <div id="doctorPic"></div>
                <div id="doctorInfo">
                    <div id="doctorText"></div>
                    <div id="doctorDescription"></div>
                </div>
                <button>Book now</button>
            </div>
        </div>
    </section>
    <Footer />
    </>;
}

export default SearchScreen;