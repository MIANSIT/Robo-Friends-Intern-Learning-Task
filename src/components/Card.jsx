import React, { useState } from "react";
import {FaUser,FaRobot,FaIdBadge} from "react-icons/fa";
import {MdEmail,MdCake} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import PropTypes from "prop-types";
import 'tachyons';
import '../App.css';
import classNames from "classnames";

function  Card({id,name,username,email}){
    const [isfav,setFav]=useState(false);
    const cardClass=classNames('Cardrobotcard',{'fav':isfav});

    return(
    
        <IconContext.Provider value={{color:"white", className:"global-class-name" ,size:"22px"}}>
            <div className={cardClass}onClick={()=>
                    setFav(!isfav)}>  
                <div className="Cardrobotimgcontainer">
                    <img className="Cradrobotimg" src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
                </div>
            <div className="Cardrobotinfocontainer">
                  <div className="Cardrobotinfobox"><p className="Cardrobotinfotext"><FaUser/><br/>{name}</p></div>
                  <div className="Cardrobotinfobox"><p className="Cardrobotinfotext"><FaIdBadge/><br/>{username}</p></div>
                  <div className="Cardrobotinfobox"><p className="Cardrobotemail"><MdEmail/><br/>{email}</p></div>
            </div>
          
            </div>
        
        </IconContext.Provider>
        


    );
}

 Card.propTypes={
   id:PropTypes.number.isRequired,
   name:PropTypes.string.isRequired, 
   email:PropTypes.string.isRequired,
   username:PropTypes.string.isRequired

}

export default Card;