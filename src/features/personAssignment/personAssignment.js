import { useSelector, useDispatch } from "react-redux"
import { assignPerson } from "../personAssignment/personAssignmentSlice"


function PersonAssignment(itemId) {
    // Setup redux
    const people = useSelector(state => state.people.people)
    const dispatch = useDispatch()

    function addPersonItemEntry(personId) {
        let assignment = {
            "personId": personId,
            "itemId": itemId,
        }
        dispatch(assignPerson(assignment))
    }
    return (
        <div>
            <ul className="addPeople">
              {people.map(person => {
                  return (
                      <li onClick={ () => addPersonItemEntry(person.id) } key={person.id}>{person.name}</li>
                  )
              })}
            </ul> 
        </div> 
    )
}

export default PersonAssignment;
