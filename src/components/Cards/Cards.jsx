import React from "react";
import './Cards.css'
import { CardsData } from "../../Data/Data";
import  Card  from "../Card/Card";
const Cards = () => {
    return (
        <div className="Cards">
           {CardsData.map((card, id)=>{
            return(
               <div className="parentContainer"> 
               <Card
               title={card.title}
               color={card.color}
               barValue={card.barValue}
               value={card.value}
               png={card.png}
               series={card.series}
               />
               </div>
            )
           })}
        </div>
    )
}
export default Cards