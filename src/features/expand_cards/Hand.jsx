import Card from "./Card";
import getCards from "./getCards";
import "./Hand-Card.css";

const Hand = ({ images }) => {
  const geometry = getCards(images.length)
  return (
    <div className="hand">
      {geometry.map((geo, i) => (
        <Card
          key={i}
          initialRotation={geo.initialRotation}
          hoverRotation={geo.hoverRotation}
          imgUrl={images[i]}
        />
      ))}
    </div>
  );
}

export default Hand