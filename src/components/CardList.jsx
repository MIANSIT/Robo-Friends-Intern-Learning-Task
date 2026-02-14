import  React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import '../App.css';

function CardList({robots}) {

    if(robots.length===0)
    {
        return( 
       <div className="tc">
           <h3 className="f4 red">No user found<br/> OR <br/>Please try again with valid names</h3> 
        </div>
        );
    }

    return(
        <div className="Cardlistrobotgrid">
            {robots.map((user)=>(
            <Card
             key={user.id}
             id={user.id}
             name={user.name}
             email={user.email}
             username={user.username}/>
            ))}
        </div>
    );
}

CardList.propTypes={

    robots:PropTypes.arrayOf(
    PropTypes.shape({
       id:PropTypes.number.isRequired,
       name:PropTypes.string.isRequired,
       email: PropTypes.string.isRequired,
       username: PropTypes.string.isRequired
    })).isRequired

};

export default CardList;

