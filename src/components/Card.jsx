import React from "react";
import {FaUser,FaRobot,FaIdBadge} from "react-icons/fa";
import {MdEmail,MdCake} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import PropTypes from "prop-types";
import 'tachyons';

function  Card({id,name,username,email}){

    return(
    <div className="  flex flex-wrap tc bg-navy dib br3 bw4 pa1 ma2 grow shadow-5">
        <IconContext.Provider value={{color:"white", className:"global-class-name" ,size:"22px"}}>
            <div className="flex flex-column pa2 ma1">
                <div className="bg-moon-gray pa1 ba black">
                    <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
                </div>
            <div className="bg-light-green pa1 ba black">
                  <div><p className=" bg-blue f4 b yellow"><FaUser/><br/>{name}</p></div>
                  <div><p className="bg-blue  f4 b yellow"><FaIdBadge/><br/>{username}</p></div>
                  <div><p className="bg-blue  f4 b yellow"><MdEmail/><br/>{email}</p></div>
            </div>
          
            </div>
        </IconContext.Provider>
    </div>

    );
}

 Card.propTypes={
   id:PropTypes.number.isRequired,
   name:PropTypes.string.isRequired, 
   email:PropTypes.string.isRequired,
   username:PropTypes.string.isRequired

}

export default Card;