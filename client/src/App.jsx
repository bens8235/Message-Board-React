import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch("http://localhost:8080/all-messages");
        const data = await response.json();
        setItems(data);
      }
      fetchData();
    },
    [items]
  );

  return (
    <div>
      <h1>My posts</h1>
      <nav>
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/posts">
          Posts
        </Link>
        <Link className="link" to="/add-new-post">
          Add New Post
        </Link>
      </nav>

      <Routes>
        {items.map(function (item) {
          return (
            <Route
              key={item.name + item.content + item.id}
              path={`/posts${item.id}`}
              element={
                <div>
                  <h2>{item.name}</h2>
                  <h2>{item.content}</h2>
                </div>
              }
            />
          );
        })}

        <Route path="/home" element={<h2>Home</h2>} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="/add-new-post"
          element={<Form items={items} setItems={setItems} />}
        />
      </Routes>
    </div>
  );
}
