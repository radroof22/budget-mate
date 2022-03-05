import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import "./ItemEntry.css"
import PersonAssignment from "../personAssignment/PersonAssignment"
import {removeItem} from "./itemSlice";
import {removeAssignmentsByItem} from "../personAssignment/personAssignmentSlice"

function ItemEntry({itemId}) {
  // Redux state
  const item = useSelector(state => state.items.items[itemId])

  const dispatch = useDispatch()

  // Local state
  const [showPersonAdder, setshowPersonAdder] = useState(false);

  function viewRemoveItem(itemId) {
    dispatch(removeItem(itemId)) // remove item from list
    dispatch(removeAssignmentsByItem(itemId)) // remove item from assignment
  }


  return (
     <div>
      <li>
        {item.name} - {item.quantity} @ ${item.price} = <strong>${item.quantity * item.price}</strong><button onClick={() => setshowPersonAdder(!showPersonAdder)}>+</button><button onClick={() => viewRemoveItem(itemId)}>X</button>
      </li>

      {showPersonAdder && <PersonAssignment itemId={itemId}/> }
      
    </div> 
      
  )
}

export default ItemEntry;