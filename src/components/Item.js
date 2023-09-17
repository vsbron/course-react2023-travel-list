export default function Item({ item, onDeleteItems, onToggleItem }) {
  const { id, description, quantity, packed } = item;

  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          onToggleItem(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItems(id)}>❌</button>
    </li>
  );
}
