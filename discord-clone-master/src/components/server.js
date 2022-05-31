import React from 'react';
import DashboardOtherTools from './Dashboard/other_tools';
import ServerLeft from './Server/left';
import ServerRight from './Server/right';
import ServerMiddle from "./Server/middle";
import style from "../assets/styles/server_style.css";
import { useState } from 'react';

const Server = () => {
    const arr = [
        {
            "name" : "Javascript",
            "messages" : [],
            "available" : true
        },
        {
            "name" : "algorithms",
            "messages" : [],
            "available" : true
        },{
            "name" : "announcements",
            "messages" : [],
            "available" : true
        },{
            "name" : "blogging",
            "messages" : [],
            "available" : true
        },{
            "name" : "collaborators",
            "messages" : [],
            "available" : false
        },{
            "name" : "course-ideas",
            "messages" : [],
            "available" : false
        },{
            "name" : "machine-learning",
            "messages" : [],
            "available" : true
        }
    ]
    const [channels, set_channels] = useState(arr);
    const [current_channel, set_current_channel] = useState(arr[0]);

    return(
        <div id="server">
            <DashboardOtherTools/>
            <ServerLeft channels={channels} set_channels={set_channels} current_channel={current_channel} set_current_channel={set_current_channel}/>
            <ServerMiddle channels={channels} set_channels={set_channels} current_channel={current_channel} set_current_channel={set_current_channel}/>
            <ServerRight/>
        </div>
    )
}

export default Server;