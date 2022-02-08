import { useState } from "react";
import {useSelector} from "react-redux"
import "./ItemEntry.css"
function ItemEntry({itemId}) {
  // Redux state
  const item = useSelector(state => state.items.items[itemId])

  const [showPersonAdder, setshowPersonAdder] = useState(false);

  return (
     <div>
      <li key={item.id}>
        {item.name} - {item.quantity} @ ${item.price} = <strong>${item.quantity * item.price}</strong><button onClick={() => setshowPersonAdder(!showPersonAdder)}>+</button>
      </li>

      {showPersonAdder && <ul className="addPeople">
        <li></li>
      </ul> }
    </div> 
      
  )
}

export default ItemEntry;