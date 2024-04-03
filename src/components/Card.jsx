const Card = (cards) => {
  const card = cards.cards;

  const stacks = card.stack || [];
  const icons = card.icons || [];
  console.log(card);

  return (
    <div className={card.class}>
      <div className="image-container">
        
        <img src={card.image} alt="" />
        </div>
      <div className="content">
        <h3>{card.title}</h3>
        <ul className="stack">
          {stacks.map((stack, index) => {
            return <li key={index}>{stack}</li>;
          })}
        </ul>

        <p>{card.content}</p>
        <ul className="icons">
          {icons.map((icon, index) => {
            return <li key={index}>{icon}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
