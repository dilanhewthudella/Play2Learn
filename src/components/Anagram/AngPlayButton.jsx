import { Link } from "react-router-dom";

function AngPlayButton() {
  return (
    <Link className="btn btn-primary form-control" to="/anagram/play">
      Play!
    </Link>
  );
}

export default AngPlayButton;
