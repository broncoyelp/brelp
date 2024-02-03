import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="base">
      
      <div className="header">
        <div className="brelp">
          Brelp
        </div>
      </div>

      <div className="whole">
        <div className="row1">

          <div>
            <button className="food">
              <img className="hibachi" src="./images/hibachi.jpg" /> Hibachi-San
            </button>
          </div>
          

          <button className="food">Centerpointe</button>

          <button className="food">Qdoba</button>

        </div>

        <div className="row2">

          <button className="food">Bric Break</button>

          <button className="food">Fit Bites</button>

        </div>
      
      </div>
      
    </div>
    
  );
}

export default App;
