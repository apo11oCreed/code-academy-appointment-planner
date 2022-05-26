import React from "react";

export const Tile = (prop) => {

  const props=Object.values(prop.item);
  
  return (
    <div className="tile-container">
      {
        props.map((item,index)=>{
          let tileClass=index!==0?'tile':'tile-title';
          return <p key={index} className={tileClass}>{props[index]}</p>

        })
      }
    </div>
  );
};
