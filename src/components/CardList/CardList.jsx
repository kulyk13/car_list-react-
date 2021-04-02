import Card from "../Card/Card";
import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";

export default function CardList() {
  const {cars: cardsData, view} = useContext(DataContext);
  return (
    <div className={"row " + view + " g-0 card-list"} id="cardList">
      {cardsData.map((card) => (
        <Card key={card.id} car={card} />
      ))}
    </div>
  );
}
