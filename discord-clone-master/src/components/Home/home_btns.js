import download_icon from "../../assets/Images/download_icon.png";

const HomeBtns = () => {
    return(
        <div id="home-btns-div">
            <div className="home-btns-sub-div">
                <button id="download-mac-btn">
                    <img src={download_icon}></img>
                    Download for Mac
                </button>
            </div>

            <div className="home-btns-sub-div">
                <button id="open-in-browser-btn">
                    <a href="/dashboard">
                        Open Discord in your browser
                    </a>
                </button>
            </div>
        </div>
    )   
}

export default HomeBtns;