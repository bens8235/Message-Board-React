import { useState } from "react";

export default function Form({ items, setItems }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    await fetch("https://message-board-server-react.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    setItems(items);
    document.getElementById("form").reset();
    document.getElementById("myId1").selectedIndex = 0;
    document.getElementById("myId2").selectedIndex = 0;
    document.getElementById("myId3").selectedIndex = 0;
  }

  return (
    <form onSubmit={handleSubmit} id="form" className="form-container">
      <label>Name</label>
      <select id="myId1" required name="name">
        <option value="" disabled selected hidden>
          Which User is it?
        </option>
        <option value="Ben">Ben</option>
        <option value="Dan">Dan</option>
        <option value="Edd">Edd</option>
      </select>
      <label>Title</label>
      <input required type="text" name="title" />
      <label>Content</label>
      <textarea required type="text" name="content"></textarea>
      <label>Category</label>
      <select id="myId2" required name="category">
        <option value="" disabled selected hidden>
          Choose a category
        </option>
        <option value="gaming">Gaming</option>
        <option value="sport">Sport</option>
        <option value="television">Television</option>
      </select>
      <label>Tag</label>
      <select id="myId3" required name="tag">
        <option value="" disabled selected hidden>
          Choose a tag
        </option>
        <option value="fun">Fun</option>
        <option value="groovy">Groovy</option>
        <option value="cool">Cool</option>
      </select>
      <button type="submit">Add Post</button>
    </form>
  );
}
