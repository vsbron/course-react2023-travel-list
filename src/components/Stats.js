export default function Stats({ items }) {
  // Alternative return statement if there's no items in the list (state)
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  // Deriving state (creating variables from the current state variable)
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percantage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percantage === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${numItems} items on your list and you already packed ${numPacked} (${percantage}%)`}
      </em>
    </footer>
  );
}
