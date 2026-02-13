const Card = ({ initialRotation, hoverRotation, imgUrl }) => {
  return (
    <div
      className="card"
      style={{
        "--initial-rotation": initialRotation,
        "--r": hoverRotation,
      }}
    >
      <div 
        className="card-face" 
        style={{ backgroundImage: `url(${imgUrl})` }} 
      />
    </div>
  );
}

export default Card