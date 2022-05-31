import hash_img from "../../assets/Images/hash.png";
import notifications_img from "../../assets/Images/notifications.png";
import pin_img from "../../assets/Images/pin.png";
import friend_img from "../../assets/Images/friend.png";
import hi_mascot_img from "../../assets/Images/hi_mascot.png";
import add_img from "../../assets/Images/server_add.png";
import gift_img from "../../assets/Images/gift.png";
import gif_img from "../../assets/Images/gif.png";
import smiley_img from "../../assets/Images/smiley.svg";
import { useState } from "react";



const ServerMiddle=({channels, set_channels, current_channel, set_current_channel})=>{
    const [current_message, set_current_message] = useState("");

    const update_channels = (e) =>{
        e.preventDefault();
        let new_channels = [];
        channels.map((e)=>{
            if(e.name===current_channel.name){
                e.messages.push(current_message);
                new_channels.push(e);
            }else{
                new_channels.push(e);
            }
        })

        console.log(new_channels);
        set_channels(new_channels)
    }

    return(
        <div id="server-middle">
            <div id="server-middle-header">
                <div id="server-middle-header-1">
                    <img src={hash_img} />
                    <span>{current_channel.name}</span>
                </div>

                <div id="server-middle-header-2">
                    <div>
                        <img src={notifications_img}/>
                    </div>
                    <div>
                        <img src={pin_img}/> 
                    </div>
                    <div>
                        <img src={friend_img}/>
                    </div>
                </div>
            </div>

            <div id="server-middle-body">
                {current_channel.messages.map((e)=>{
                    return(
                        <div className="server-middle-texts">
                            <span>You : </span> 
                            <p>{e}</p>
                        </div>
                    )
                })}
            </div>

            <div id="server-middle-user-area">
                <div id="server-middle-user-area-1">
                    <div>
                        <img src={hi_mascot_img}/>
                        <button onClick={update_channels}>Wave to</button>
                    </div>
                </div>

                <div id="server-middle-user-area-2">
                    <img src={add_img}/>
                    <input onChange={(e)=>{
                        set_current_message(e.target.value)
                    }} placeholder="Message #undefined"/>
                    <img src={gift_img}/>
                    <img src={gif_img}/>
                    <img src={smiley_img}/>
                </div>

            </div>

        </div>
    )
}

export default ServerMiddle;