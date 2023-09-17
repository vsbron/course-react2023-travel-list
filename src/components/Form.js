import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function resetForm() {
    setDescription("");
    setQuantity(1);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Preventing default behavior
    if (!description) return; // Guard clause

    // Collecting all the form fields to the newItem object and adding it to the state
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem); // Calling the function we got from props

    // Resetting the form
    resetForm();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Creating array with 20 numbered (i) elements. Then mapping through and creating options field for each */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
