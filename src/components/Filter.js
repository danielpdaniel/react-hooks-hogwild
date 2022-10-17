import React from "react";

function Filter({ onFilterClick, onSortClick }){

    function handleClick(){
        onFilterClick()
    }

    function handleSortClick(event){
        onSortClick(event.target.id)
    }

    return (
        <div>
        <button onClick={handleClick}>Filter By Greased</button>
        <br></br>
        <button onClick={handleSortClick} id="weight">Sort By Weight</button>
        <button onClick={handleSortClick} id="name">Sort By Name</button>
        <button onClick={handleSortClick} id="all">Clear Filters</button>
        </div>
    )
}

export default Filter