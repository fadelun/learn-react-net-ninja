import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { number } = useParams();
  const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + number);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <h2>Loading...</h2>}
      {error && <p className="error">{error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            <strong>written by {blog.author}</strong>
          </p>
          <p>{blog.body}</p>
          <button onClick={handleClick}>delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
