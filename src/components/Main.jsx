import games from "../data/game_titles";
import GameCard from "./GameCard";
import "./Main.css";

function Main() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <span className="hero-badge">Learn while playing</span>

        <h1>Welcome to Play2Learn</h1>

        <p>
          Choose a game, challenge yourself, and improve your skills while
          having fun.
        </p>
      </section>

      <section className="games-section">
        <div className="section-heading">
          <div>
            <h2>Choose your challenge</h2>
          </div>

          <span className="game-count">{games.length} games</span>
        </div>

        <div className="game-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
