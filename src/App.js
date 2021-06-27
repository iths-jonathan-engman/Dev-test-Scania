import './App.css';
import Header from './components/header/Header';
import Dropdown, { dropFunction } from './components/dropdown/Dropdown';
import Table, { ResetDistance } from './components/table/Table';

function resetBtn() {
  dropFunction()
  ResetDistance()
};

function App() {

  return (
    <div className="container">
      <Header/>
      <div className="content-container">
        <Dropdown/>
        <span className="resetBtn" onClick={resetBtn}>Reset</span>
        <Table/>
      </div>
    </div>
  )
};

export default App;