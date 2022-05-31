import red_icon_img from '../../assets/Images/icon_2.png';
import green_icon_img from '../../assets/Images/icon_4.png'; 
import yellow_icon_img from '../../assets/Images/icon_3.png'; 
import inbox_img from "../../assets/Images/inbox.png";
import help_img from "../../assets/Images/help.png";
import king_img from "../../assets/Images/king.png";

const ServerRight=()=>{
    const people = [0,0,0,0,0,0,0];

    return(
        <div id="server-right">
            <div id="server-right-header">
                <div id='input-div'>
                    <input placeholder='Search' />
                    <img id='search-img' src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"/>
                </div>
                <div id='server-right-img-div'>
                    <img src={inbox_img}/>
                    <img src={help_img}/>
                </div>
            </div>

            <div id="server-right-people">
                <p>ONLINE-3</p>
                {people.map((e,index)=>{
                    return(
                        <>
                        {index===0 && <div className='person'>
                                <img src={red_icon_img}/>
                                <span>Milad</span>
                                <img src={king_img}/>
                            </div>}
                        {index === 1 && <div className='person'>
                                <img src={green_icon_img}/>
                                <span>Batman</span>
                            </div>}
                        {index!=0 && index!=1 && <div className='person'>
                                <img src={yellow_icon_img}/>
                                <span>[x]joker[x]</span>
                            </div>}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ServerRight;