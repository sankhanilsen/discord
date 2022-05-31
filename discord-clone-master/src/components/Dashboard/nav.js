import React from 'react';
import friend_img from "../../assets/Images/friend.png";

const DashboardNav = ({page}) => {
    return(
        <>
            <div id="dashboard-main-nav">
                <img src={friend_img} />
                <span className='dashboard-add-friend'>Friends</span>
                <span className='dashboard-online'>Online</span>
                <span className='dashboard-others'>All</span>
                <span className='dashboard-others'>Pending</span>
                <span className='dashboard-others'>Blocked</span>
                {page==="dashboard" && <button>
                    <a id="add-friend-a" href="dashboard/addfriend">Add Friend</a>
                </button> }
                {page==="add-friend" && <span id='add-friend-span'>Add Friend</span>}
            </div>
        </>
    )
}

export default DashboardNav;