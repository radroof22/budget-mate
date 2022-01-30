import { useState } from "react";
import "./PeoplePane.css"

function PeoplePane() {
    const [personCount, setpersonCount] = useState(0);
    const [People, setPeople] = useState([]);
    const [CurrPerson, setCurrPerson] = useState("");

    function addNewPerson() {
        setPeople([...People, {
            id: personCount,
            name: CurrPerson,
            total: 0.0
        }]);
        setCurrPerson("");
        setpersonCount(personCount + 1)
    }

    return (
        <div className="innerContent">
          <h5 className='paneHeader'>People</h5>
          <div>
              <input value={CurrPerson} onChange={e => setCurrPerson(e.target.value)}/>
              <button onClick={addNewPerson}>Add</button>
          </div>
          <div>
              <ul>
                  
              {People.map(person => {
                  return (
                        <li key={person.id}>
                          {person.name}, ${person.total}
                        </li>
                  )
              })}

              </ul>
          </div>
        </div>
    )
}

export default PeoplePane;