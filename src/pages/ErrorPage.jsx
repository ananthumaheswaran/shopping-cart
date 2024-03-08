import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <ul>
        <li>
          {" "}
          <Link to="/">
            You can go back to the home page by clicking here, though!
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
