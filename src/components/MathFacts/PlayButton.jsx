import { Link } from "react-router-dom";

function PlayButton() {
  return (
    <Link className="btn btn-primary form-control" to="/math-facts/play">
      Play!
    </Link>
  );
}

export default PlayButton;
