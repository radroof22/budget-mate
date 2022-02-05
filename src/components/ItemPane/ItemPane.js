import { useState } from "react";

function ItemPane({items, addItem}) {
  
  const [itemCount, setItemCount] = useState(0)
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0)

  function addNewItem() {
    let item = {
      id: itemCount,
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity
    }
    
    addItem(item)

    // reset state
    setItemCount(itemCount + 1);
    setItemName("")
    setItemPrice(0)
    setItemQuantity(0)
  }

  return (
      <div className="innerContent">
        <h5 className='paneHeader'>Items</h5>

          <div>
            <input 
              placeholder="Item Name" 
              value={itemName} 
              onChange={e => setItemName(e.target.value)} 
            />
            <input
              type="number"
              placeholder="Item Price" 
              value={itemPrice} 
              onChange={e => setItemPrice(e.target.value)} 
            />
            <input
              type="number"
              placeholder="Item Quantity" 
              value={itemQuantity} 
              onChange={e => setItemQuantity(e.target.value)} 
            />
            <button onClick={addNewItem}>Add Item</button>
          </div>
          <div>
            <ul>
              {items.map(item => {
                return (
                  <li key={item.id}>
                    {item.name} - {item.quantity} @ ${item.price} = <strong>${item.quantity * item.price}</strong>
                  </li>
                )
              })}
            </ul>
          </div>
      </div>
      
  )
}

export default ItemPane;