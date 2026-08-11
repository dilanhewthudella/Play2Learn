import { Link } from "react-router-dom";
import "./GameCard.css";

function GameCard({ game }) {
  return (
    <article className={`game-card ${game.locked ? "locked" : ""}`}>
      <div className="game-image-container">
        <img
          className="game-image"
          src={game.image}
          alt={`${game.title} game`}
        />

        {game.locked && <span className="locked-badge">Coming Soon</span>}
      </div>

      <div className="game-card-content">
        <h3>{game.title}</h3>
        <p>{game.description}</p>

        {game.locked ? (
          <button className="game-button locked-button" disabled>
            <span aria-hidden="true">🔒</span>
            Coming Soon
          </button>
        ) : (
          <Link className="game-button" to={game.path}>
            {game.buttonText}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}

export default GameCard;
