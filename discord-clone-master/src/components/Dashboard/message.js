import friends_img from "../../assets/Images/friend.png";
import discover_img from "../../assets/Images/stage_discovery.png";
import nitro_img from "../../assets/Images/nitro.png";
import add_img from "../../assets/Images/small_add.png";

const DashboardMessage = () =>{
    const dms = [0,0,0,0,0,0,0,0,0,0];
    return(
        <div id="dashboard-message">
            <input placeholder="Find or start a conversation"></input>
            <div id="dashboard-options">
                <button>
                    <img src={friends_img} />
                    <span>Friends</span>
                </button>
                <button>
                    <img src={discover_img} />
                    <span>Stage Discovery</span>
                </button>
                <button>
                    <img src={nitro_img} />
                    <span>Nitro</span>
                </button>
            </div>

            <div id="dashboard-dms">
                    <div id="dashboard-dms-header">
                        <span>DIRECT MESSAGES</span>
                        <img src={add_img} />
                    </div>

                <div id="dashboard-dms-body">
                    {dms.map(()=>{
                        return(
                            <div className="dashboard-dm">
                                <div className="dashboard-dm-circle"></div>
                                <div className="dashboard-dm-rectangle"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashboardMessage;