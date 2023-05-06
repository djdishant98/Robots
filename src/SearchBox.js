import React from "react";

const SearchBox = ({searchfield,sc}) =>{
    return(
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search Robot"
            onChange={sc}/>
        </div>
    )
}

export default SearchBox;