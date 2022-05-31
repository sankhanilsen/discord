import React, { useEffect } from 'react';
import style from "../assets/styles/dashboard_style.css";
import DashboardNav from './Dashboard/nav';
import DashboardActiveNow from './Dashboard/active_now';
import DashboardMain from './Dashboard/main';
import DashboardMessage from './Dashboard/message';
import DashboardOtherTools from './Dashboard/other_tools';

const Dashboard = ({page, set_page}) => {

    useEffect(()=>{
        set_page("dashboard")
    },[])
    
    return(
        <div id='dashboard'>
            <DashboardOtherTools/>
            <DashboardMessage/>
            <div id="dashboard-main">
                <DashboardNav page={page} />
                <div id='dashboard-main-sub'>
                    <DashboardMain/>                    
                    <DashboardActiveNow/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;