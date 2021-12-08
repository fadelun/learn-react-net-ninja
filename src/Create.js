import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handlerSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("add blog");
      setIsPending(false);
      history.push("/");
      // history.push("/blog/1");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog </h2>

      <form onSubmit={handlerSubmit}>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog Body:</label>
        <textarea value={body} required onChange={(e) => setBody(e.target.value)} />

        <label>Blog author:</label>
        {/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select> */}
        <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} />

        {!isPending && <button>add blog</button>}
        {isPending && <button style={{ backgroundColor: "#75e7a1" }}>adding....</button>}
      </form>
    </div>
  );
};

export default Create;
