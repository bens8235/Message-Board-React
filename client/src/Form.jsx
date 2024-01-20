export default function Form({ items, setItems }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    setItems(items);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Name</label>
      <select required name="name">
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
      <select required name="category">
        <option value="" disabled selected hidden>
          Choose a category
        </option>
        <option value="gaming">Gaming</option>
        <option value="sport">Sport</option>
        <option value="television">Television</option>
      </select>
      <label>Tag</label>
      <select required name="tag">
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
