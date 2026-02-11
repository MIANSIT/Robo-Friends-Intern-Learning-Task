import React from "react";
import {FaUser,FaRobot,FaIdBadge} from "react-icons/fa";
import {MdEmail,MdCake} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import PropTypes from "prop-types";
import 'tachyons';

function  Card({id,name,username,email}){

    return(
    <div className=" tc bg-light-green dib br3 bw4 pa4 ma4 grow shadow-5">
        <IconContext.Provider value={{color:"blue", className:"global-class-name"}}>
            <div className="flex flex-column pa2 ma1">
                <div className="bg-moon-gray ma1 ba black">
                    <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
                </div>
            <div className="bg-light-gray ma-auto ba black">
                  <p className="f4 b black">{name}<FaUser/></p>
                  <p className="f4 b black">{username}<FaIdBadge/></p>
                  <p className="f4 b black">{email}<MdEmail/></p>
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