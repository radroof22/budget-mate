import { useSelector, useDispatch } from "react-redux"
import { assignPerson, removeAssignment } from "./personAssignmentSlice"
import "./PersonAssignment.css"

function PersonAssignment({itemId}) {
    // Setup redux
    const people = useSelector(state => state.people.people)
    const assignments = useSelector(state => state.personAssignments.assignments)
    const dispatch = useDispatch()

    function handlePersonClick(personId) {
        let payload = {
            "personId": personId,
            "itemId": itemId,
        }
        if (personParticipating(personId)) {
            console.log("lets remove")
            dispatch(removeAssignment(payload))
        } else {
            dispatch(assignPerson(payload))
        }
        
    }

    function personParticipating(personId) {
        return assignments.filter(a => {
            return a.personId === personId && a.itemId === itemId
        }).length > 0
    }
    return (
        <div>
            <ul className="addPeople">
              {people.map(person => {
                  return (
                    <li onClick={ () => handlePersonClick(person.id) } 
                        key={person.id}
                        className = {personParticipating(person.id) ? "included" : null}>
                            {person.name}
                    </li>
                  )
              })}
            </ul> 
        </div> 
    )
}

export default PersonAssignment;
