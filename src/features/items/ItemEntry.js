import { useState } from "react";
import { useSelector } from "react-redux"
import "./ItemEntry.css"
import PersonAssignment from "../personAssignment/personAssignment"

function ItemEntry({itemId}) {
  // Redux state
  const item = useSelector(state => state.items.items[itemId])

  // Local state
  const [showPersonAdder, setshowPersonAdder] = useState(false);


  return (
     <div>
      <li>
        {item.name} - {item.quantity} @ ${item.price} = <strong>${item.quantity * item.price}</strong><button onClick={() => setshowPersonAdder(!showPersonAdder)}>+</button>
      </li>

      {showPersonAdder && <PersonAssignment /> }
      
    </div> 
      
  )
}

export default ItemEntry;