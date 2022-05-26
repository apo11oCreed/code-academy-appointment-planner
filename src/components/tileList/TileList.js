import React from "react";
import {Tile} from "../tile/Tile.js";

export const TileList = (props) => {

  const data=props.data;

  return (
      <>
      {
        data.map((item,i)=>{
          return <Tile key={i} item={item} />
        })
      }
      </>
  );
};
