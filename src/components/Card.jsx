import React, { useState } from "react";
import {FaUser,FaRobot,FaIdBadge,FaHeart} from "react-icons/fa";
import {MdEmail,MdCake} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import PropTypes from "prop-types";
import 'tachyons';
import '../App.css';
import classNames from "classnames";
import { toast } from 'react-toastify';
import Modal from 'react-modal';

function  Card({id,name,username,email,togglefav,isFavorite}){
    const [isfav,setFav]=useState(false);
    const [modal,setModal]=useState(false);
    const cardClass = classNames('Cardrobotcard pointer', { 'fav': isFavorite });

    const handlefav=(e)=>{
        e.stopPropagation();
        const newfav=!isfav;
        togglefav(id, name);
        setFav(newfav);
       
    }

    const togglemodal=(e)=>{
        if (e) 
        {
            e.stopPropagation();
            setModal(!modal);
       
        }
    }

    return(
    
        <IconContext.Provider value={{className:"global-class-name" ,size:"22px"}}>
            <div className={cardClass}onClick={togglemodal}>  
                <div className="Cardrobotimgcontainer">
                    <img className="Cradrobotimg" src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
                </div>
              <div className="Cardrobotinfocontainer">
                  <div className="Cardrobotinfobox"><p className="Cardrobotinfotext"><FaUser/><br/>{name}</p></div>
                  <div className="Cardrobotinfobox"><p className="Cardrobotinfotext"><FaIdBadge/><br/>{username}</p></div>
                  <div className="Cardrobotinfobox"><p className="Cardrobotemail"><MdEmail/><br/>{email}</p></div>
                  <div onClick={handlefav} ><p className="Cardrobotfavicon"><FaHeart/></p></div> 
              </div>
              <Modal
               isOpen={modal}
               onRequestClose={togglemodal}
               contentLabel="Favorite"
               className="Cardrobotmodal"
               overlayClassName="Cradrobotoverlay">
                <div className="tc pa4">
                      <h2 className="dark-blue f2">Robot user</h2>    
                      <p className="Cardrobotinfobox">Name: {name}</p>
                      <p className="Cardrobotinfobox">Username: {username}</p> 
                      <p className="Cardrobotinfobox">Email: {email}</p>  
                  </div>
                  <div>
                      <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-red pointer" onClick={togglemodal}>Close</button>
                  </div>
              </Modal>    
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