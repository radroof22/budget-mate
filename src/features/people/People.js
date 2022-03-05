import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import "./People.css"
import { addPerson, removePerson } from "./peopleSlice";
import { removeAssignmentsByPerson } from "../personAssignment/personAssignmentSlice"

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
        newPerson.totalCost = state.personAssignments.assignments
            .filter(assignment => assignment.personId === newPerson.id)
            .reduce((prev, curr) => {

                let filteredItems = state.items.items.filter(item => item.id === curr.itemId)
                if (filteredItems.length > 0){
                    let item = filteredItems[0]
                    let total_participants_on_item = state.personAssignments.assignments    
                        .filter(assignment => assignment.itemId === item.id).length
                    return prev + (item.price * item.quantity) / total_participants_on_item
                }

                return prev;
            }, 0);

        return newPerson;
    }))
    const dispatch = useDispatch()

    function viewRemovePerson(personId) {
        dispatch(removeAssignmentsByPerson(personId))
        dispatch(removePerson(personId));
    }


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
                      <li key={person.id}>{person.name} - ${ Math.round(person.totalCost * 100) / 100 }<button onClick={() => viewRemovePerson(person.id)}>X</button></li>
                  )
              })}
              </ul>
          </div>
        </div>
    )
}

export default People;