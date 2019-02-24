import React from "react";
import "./style.css";



function CharacterCard(props, key) {
    

    return(props.characters.map((char) => (

      <img className="catCard" src={char.img} 
        alt="" 
        style={{
          width: "170px",
          height: '170px'
            }} 
        onClick={() => props.handleClick(char.key, char.clicked)}
       />
      ))
    )
}

export default CharacterCard