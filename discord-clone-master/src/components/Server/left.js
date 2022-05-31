import cross_img from "../../assets/Images/cross.png"
import hash_img from "../../assets/Images/hash.png";
import down_arrow_img from "../../assets/Images/down_arrow.png";
import icon5 from "../../assets/Images/icon_5.png";
import mic_off_img from "../../assets/Images/mic_off.png";
import volume_img from "../../assets/Images/volume.png";
import settings_img from "../../assets/Images/settings.png";
import { useState } from "react";

const ServerLeft=({channels, set_channels, current_channel, set_current_channel})=>{
    

    return(
        <div id="server-left">
            <div>
                    <span id="server-new-line"> newLine <img src={cross_img} /> </span>

                <div className="not-available-channel">
                    <img src={hash_img} />
                    <span>rules</span>
                </div>
                <span id="server-text-channel"> <img src={down_arrow_img}/> TEXT CHANNELS</span>

                <div id="text-channels">
                    {channels.map((e)=>{
                        let class_name ;
                        if(e.available){class_name = "available-channel"}
                        else{ class_name = "not-available-channel" }
                        return(
                            <div onClick={()=>{
                                if(e.available){
                                    console.log("e is : " + e.name);
                                    set_current_channel(e);
                                    console.log(current_channel)
                                }
                            }}  className={class_name}>
                                <img src={hash_img} />
                                <span>{e.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div id="server-bottom-pre">
                <div id="server-bottom-div">
                    <img src={icon5} />
                    <div className="server-bottom-currently-speaking">
                        <span>milad</span>
                        <span>#8454</span>
                    </div>
                    <div className="server-bottom-images">
                        <img src={mic_off_img} />
                        <img src={volume_img}/>
                        <img src={settings_img}/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ServerLeft;