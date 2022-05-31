import React, { useEffect } from 'react';
import DashboardNav from './Dashboard/nav';
import DashboardActiveNow from './Dashboard/active_now';
import DashboardMessage from './Dashboard/message';
import DashboardOtherTools from './Dashboard/other_tools';
import AddFriendMain from './Dashboard/add_friend';
import style from "../assets/styles/dashboard_style.css";

const AddFriend = ({page,set_page}) => {

    useEffect(()=>{
        set_page("add-friend")
    },[])
    
    return(
        <div id="dashboard">
            <DashboardOtherTools/>
            <DashboardMessage/>
            <div id="dashboard-main">
                <DashboardNav page={page} />
                <div id='dashboard-main-sub'>
                    <AddFriendMain/>
                    <DashboardActiveNow/>
                </div>
            </div>
        </div>
    )
}

export default AddFriend;