import Card from "../Card/Card";

export default function CardList({ cards, rate }) {
  return (
    <div className="row row-cols-1 g-0 card-list" id="cardList">
      {cards.map((card) => (
        <Card key={card.id} car={card} rate={rate} />
      ))}
    </div>
  );
}
