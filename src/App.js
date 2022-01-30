import './App.css';
import PeoplePane from './components/PeoplePane/PeoplePane';

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
        <div className="innerContent">
          <h5 className='paneHeader'>Items</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
