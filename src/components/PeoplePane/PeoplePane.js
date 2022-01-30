import { useState } from "react";
import "./PeoplePane.css"

const PeoplePane = ({People, addPerson}) => {
    const [personCount, setpersonCount] = useState(0);
    
    const [CurrPerson, setCurrPerson] = useState("");

    function addNewPerson() {
        addPerson({
            id: personCount,
            name: CurrPerson,
            total: 0.0
        })
        // setPeople([...People, ]);
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