import React, {useState} from "react";

function Hogtile({ hogName, hogImg, hogSpecialty, hogWeight, hogGreasedStatus, hogHighestMedal,}){

    
    const [clicked, setClicked] = useState(false);
    

    function handleClick(){
        setClicked(clicked=>!clicked)
    }

    return (
        <div className="ui eight wide column" onClick={handleClick}>
            {clicked ? 
            <span className="pigTile">
            <img src={hogImg} className="minPigTile"/>
            <h3>{hogName}</h3>
            <ul>
                <li>Specialty: {hogSpecialty}</li>
                <li>Weight: {hogWeight}</li>
                <li>Greased?: {hogGreasedStatus ? "Yes" : "No"}</li>
                <li>Highest Medal Achieved: {hogHighestMedal}</li>
            </ul>

            </span>
            :
            <span className="pigTile">
            <img src={hogImg} className="minPigTile"/>
            <h3>{hogName}</h3>
            </span>}
        </div>
    )
}

export default Hogtile