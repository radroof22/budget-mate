import './App.css';
import PeoplePane from './features/people/People';
import ItemPane from "./features/items/Items"

function App() {

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
        <ItemPane />
      </div>
    </div>
  );
}

export default App;
