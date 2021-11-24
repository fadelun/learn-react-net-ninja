import { useState, useEffect } from "react";
import Blogs from "./Blogs";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fecth the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 800);
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <h2>Loading...</h2>}
      {blogs && <Blogs blogs={blogs} title="NEW BLOGS!" />}
    </div>
  );
};

export default Home;
