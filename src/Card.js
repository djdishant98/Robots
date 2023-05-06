import React from "react";
import 'tachyons'


const Card=(props)=>{
    const adr="https://robohash.org/"+props.id;
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img  alt="Robots Photo" src={adr} />
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
        </div> 
    );
}

export default Card;