import './App.css';
import PeoplePane from './components/PeoplePane/PeoplePane';
import ItemPane from './components/ItemPane/ItemPane'
import { useState } from "react";

function App() {
  const [People, setPeople] = useState([]);
  const [items, setItems] = useState([])

  function addPerson(newPerson) {
    setPeople([...People, newPerson]);
  }

  function addItem(newItem) {
    setItems([...items, newItem])
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
        <ItemPane items={items} addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
