import './Card.css';

function CardComponent(props) {
  return (
    <div className="card">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default CardComponent;
