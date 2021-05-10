import './Card.css';

function CardComponent(props) {
  const cardStyle = {
    backgroundColor: props.color || '#008',
    borderColor: props.color || '#008',
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default CardComponent;
