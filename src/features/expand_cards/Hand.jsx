import Card from "./Card";
import getCards from "./getCards";
import "./Hand-Card.css";
import pic1 from '../../assets/IMG_2034.jpg'
import pic2 from '../../assets/IMG_2110.JPG'
import pic3 from '../../assets/IMG_2211.JPG'
import pic4 from '../../assets/WhatsApp Image 2026-01-24 at 01.32.14.jpeg'

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