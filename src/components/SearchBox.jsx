//import Card from './Card'
//import CardList from './CardList'
import React from "react"
import "tachyons"
import PropTypes from 'prop-types'

function SearchBox({search}){

return(
    <div>
        <input className="pa3 bg-moon-gray  w-100 outline-0 shadow-5  black" type="search" placeholder="enter name" onChange={search}/>
    </div>
);
}

SearchBox.propTypes={
    search:PropTypes.func.isRequired
};
export default SearchBox;