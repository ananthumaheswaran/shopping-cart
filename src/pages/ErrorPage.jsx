import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-message">
      <h1>Oh no, this route doesn't exist!</h1>
      <div className="returnLinkContainer">
        <Link to="/">
          <button className="returnLinkToHomepage">Go Home!</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
