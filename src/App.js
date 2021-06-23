import './App.css';
import Header from './components/header/Header';
import Dropdown from './components/dropdown/Dropdown';
import Table from './components/table/Table';

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="content-container">
        <Dropdown/>
        <Table/>
      </div>
    </div>
  );
}

export default App;