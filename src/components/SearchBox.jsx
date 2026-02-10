//import Card from './Card'
//import CardList from './CardList'
import React from "react"
import "tachyons"
import PropTypes from 'prop-types'

function SearchBox({search}){

return(
    <div>
        <input className="bg-black width-200 " type="search" placeholder="enter name" onChange={search}/>
    </div>
);
}

SearchBox.propTypes={
    search:PropTypes.func.isRequired
};
export default SearchBox;