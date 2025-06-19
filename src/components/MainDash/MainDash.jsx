import React from "react";
import Cards from "../Cards/Cards";
import { nameServ } from "../../Data/Data"; 
import './MainDash.css';

const MainDash = () => {
 
  const { name, func } = nameServ[0];

  return (
    <div className="nameServidor">
      <b><span className="nome">{name}</span></b>
      <span className="func">{func}</span>
      <div className="card"><Cards /></div>
    </div>
  );
};

export default MainDash;