import { useState } from "react";
import {useSelector} from "react-redux"
import "./ItemEntry.css"
function ItemEntry({itemId}) {
  // Redux state
  const item = useSelector(state => state.items.items[itemId])
  const people = useSelector(state => state.people.people)

  const [showPersonAdder, setshowPersonAdder] = useState(false);

  return (
     <div>
      <li>
        {item.name} - {item.quantity} @ ${item.price} = <strong>${item.quantity * item.price}</strong><button onClick={() => setshowPersonAdder(!showPersonAdder)}>+</button>
      </li>
      {showPersonAdder && 
        <ul className="addPeople">
          {people.map(person => {
              return (
                  <li key={person.id}>{person.name}</li>
              )
          })}
        </ul> 
      }
    </div> 
      
  )
}

export default ItemEntry;