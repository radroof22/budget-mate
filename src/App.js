import './App.css';
import PeoplePane from './features/people/People';
import ItemPane from './components/ItemPane/ItemPane'
import { useState } from "react";

function App() {
  const [items, setItems] = useState([])

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
        <PeoplePane />
      </div>
      <div className='itemPane'>
        <ItemPane items={items} addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
