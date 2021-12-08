import useFetch from "./useFetch";
import Blogs from "./Blogs";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <h2>Loading...</h2>}
      {data && <Blogs blogs={data} title="NEW BLOGS!" />}
    </div>
  );
};

export default Home;
