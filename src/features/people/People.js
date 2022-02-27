import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import "./People.css"
import { addPerson } from "./peopleSlice";

export function People() {
    // Local State
    const [currPerson, setcurrPerson] = useState("");

    // Redux state
    const people = useSelector(state => state.people.people.map(person => {
        let newPerson = {
            name: person.name,
            id: person.id,
            totalCost: 0,
        }
        newPerson.totalCost = state.personAssignments.assignments.reduce((prev, curr) => {
            if (curr.personId === person.id) {
                let filteredItems = state.items.items.filter(item => item.id === curr.itemId)
                if (filteredItems.length > 0){
                    let item = filteredItems[0]
                    return prev + item.price * item.quantity
                }                
            }
            return prev;
        }, 0);
        return newPerson;
    }))
    const dispatch = useDispatch()


    return (
        <div className="innerContent">
          <h5 className='paneHeader'>People</h5>
          <div>
              <input value={currPerson} onChange={e => setcurrPerson(e.target.value)}/>
              <button onClick={() => {dispatch(addPerson(currPerson)); setcurrPerson("") }}>Add</button>
          </div>
          <div>
              <ul>
              {people.map(person => {
                  return (
                      <li key={person.id}>{person.name} - ${person.totalCost}</li>
                  )
              })}
              </ul>
          </div>
        </div>
    )
}

export default People;