import { useSelector, useDispatch } from "react-redux"
import { assignPerson, removeAssignment } from "./personAssignmentSlice"
import "./PersonAssignment.css"

function PersonAssignment({itemId}) {
    // Setup redux
    const people = useSelector(state => state.people.people.map(person => {
        let newPerson = {
            id: person.id,
            name: person.name,
            assignedItem: false
        }
        
        newPerson.assignedItem = state.personAssignments.assignments.filter(assignment => 
            { 
                return assignment.itemId === itemId && assignment.personId === person.id 
            }).length > 0
        return newPerson;
    }))
    const dispatch = useDispatch()

    function handlePersonClick(person) {
        let payload = {
            "personId": person.id,
            "itemId": itemId,
        }
        if (person.assignedItem) {
            dispatch(removeAssignment(payload))
        } else {
            dispatch(assignPerson(payload))
        }
        
    }

    return (
        <div>
            <ul className="addPeople">
              {people.map(person => {
                  return (
                    <li onClick={ () => handlePersonClick(person) } 
                        key={person.id}
                        className = {person.assignedItem ? "included" : null}>
                            {person.name}
                    </li>
                  )
              })}
            </ul> 
        </div> 
    )
}

export default PersonAssignment;
