import React from "react";
import "./style.css";



function CharacterCard(props) {
    

    

return(     <div>

<img className="catCard" src={props.img} 
        alt="" 
        style={{
          width: "170px",
          height: '170px',
          float: 'left'
        }} 
        clicked={toString(props.clicked)}
    onClick={(event) => {
      console.log(event)
      props.handleClick(props.info, props.clicked)
    }}
        key={props.info}
        />

        </div> 
    
)}

export default CharacterCard