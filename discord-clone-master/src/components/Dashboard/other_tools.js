import discord_logo from "../../assets/Images/icon.png";
import new_line_img from "../../assets/Images/new_line.png";
import add_img from "../../assets/Images/big_add.png";
import explore_img from "../../assets/Images/explore.png";
import download_img from "../../assets/Images/small_download_icon.png";

const DashboardOtherTools=()=>{
    return(
        <div id="other-tools">
            <button>
                <a href="/dashboard">
                    <img src={discord_logo} />
                </a>
            </button>
            <button>
                <a href="/server/newLine">
                    <img src={new_line_img} />
                </a>
            </button>
            <button>
                <img src={add_img} />
            </button>
            <button>
                <img src={explore_img} />
            </button>
            <button>
                <img src={download_img} />
            </button>
        </div>
    )
}

export default DashboardOtherTools;