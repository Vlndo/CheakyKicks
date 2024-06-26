import React, { useState } from "react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const Panier: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const addItem = () => {
    if (itemName && itemPrice && itemQuantity > 0) {
      setItems([
        ...items,
        {
          name: itemName,
          price: parseFloat(itemPrice),
          quantity: itemQuantity,
        },
      ]);
      setItemName("");
      setItemPrice("");
      setItemQuantity(1);
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    const newItems = [...items];
    newItems[index].quantity = quantity > 0 ? quantity : 1;
    setItems(newItems);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Panier d'achat</h2>
      <div>
        <input
          type="text"
          placeholder="Nom de l'article"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix de l'article"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantité"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(parseInt(e.target.value))}
        />
        <button onClick={addItem}>Ajouter au panier</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - €{item.price.toFixed(2)} x
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
              style={{ width: "50px", marginLeft: "10px", marginRight: "10px" }}
            />
            <button onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h3>Total: {total.toFixed(2)}€</h3>
    </div>
  );
};

export default Panier;
