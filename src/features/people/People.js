import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import "./People.css"
import { addPerson } from "./peopleSlice";

export function People() {
    // Local State
    const [currPerson, setcurrPerson] = useState("");

    // Redux state
    const people = useSelector(state => state.people.people)
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
                      <li key={person.id}>{person.name} - ${person.total}</li>
                  )
              })}
              </ul>
          </div>
        </div>
    )
}

export default People;