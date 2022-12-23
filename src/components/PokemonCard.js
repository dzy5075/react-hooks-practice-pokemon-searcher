import React from "react";
import { Card } from "semantic-ui-react";
import {useState} from "react"

function PokemonCard({pokemon}) {
const {name, sprites, hp} = pokemon;


  return (
    <Card>
      <div>
        <div className="image">
          <img src= {sprites.back}  alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
