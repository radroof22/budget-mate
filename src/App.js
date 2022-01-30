import './App.css';
import PeoplePane from './components/PeoplePane/PeoplePane';
import ItemPane from './components/ItemPane/ItemPane'
import { useState } from "react";

function App() {
  const [People, setPeople] = useState([]);

  function addPerson(newPerson) {
    setPeople([...People, newPerson]);
  }
  return (
    <div className="App">
      <header className='appHeader'>
        <h3><strong>Budget-Mate</strong></h3>
      </header>
      <hr/>
      <div className='peoplePane'>
        <PeoplePane People={People} addPerson={addPerson} />
      </div>
      <div className='itemPane'>
        <ItemPane/>
      </div>
    </div>
  );
}

export default App;
