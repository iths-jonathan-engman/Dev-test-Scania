import './App.css';
import Header from './components/header/Header';
import Dropdown from './components/dropdown/Dropdown';
import Table from './components/table/Table';

function App() {

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="container">
      <Header/>
      <div className="content-container">
        <Dropdown/>
        <button className="resetBtn" onClick={refreshPage}>Refresh</button>
        <Table/>
      </div>
    </div>
  );
}

export default App;