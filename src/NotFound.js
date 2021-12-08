import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry, you search is not there</h2>
      <br />
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
