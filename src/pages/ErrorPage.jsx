import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-message">
      <h1>Oh no, this route doesn't exist!</h1>
      <ul className="returnLinkToHomepage">
        <li>
          <Link to="/">
            You can go back to the home page by clicking here, though!
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
