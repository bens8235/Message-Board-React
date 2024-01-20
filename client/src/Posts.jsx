import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Posts() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {items.map(function (item) {
        return (
          <div
            className="post-container"
            key={item.name + item.content + item.id}
          >
            <Link to={`/posts${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
