import bg_img from "../../assets/Images/dashboard_bg.svg";


const AddFriendMain = () =>{
    return(
        <div id="add-friend">
            <h3>ADD FRIEND</h3>
            <p className="add-friend-info">You can add a friend with their Discord Tag. It's cAsE sEnSiTiVe</p>

            <div id="add-friend-input-div">
                <input placeholder="Enter a Username#0000"></input>
                <button>Send Friend Request</button>
            </div>

            <div id="wumpus-div">
                <img src={bg_img}></img>
                <p className="wumpus-waiting">Wumpus is waiting on friends. You don't have to though!</p>
            </div>
        </div>
    )
}

export default AddFriendMain;