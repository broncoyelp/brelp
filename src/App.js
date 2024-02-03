import logo from './logo.svg';
import './App.css';
import hibachi from "./images/hibachi.jpg"
import centerpointe from "./images/centerpointe.jpg"
import bricbreak from "./images/bricbreak.jpg"
import fitbites from "./images/fitbites.jpg"
import qdoba from "./images/qdoba.jpg"


function App() {
  return (
    <div className="base">
      
      <div className="header">
        <div className="brelp">
          Brelp
        </div>
      </div>

      <div className="whole">
          
          <button className="food">
          <div className="button">
              <img className="hibachi" src={hibachi} /> Hibachi-San
            </div>
          </button>
          
          <button className="food">
            <div className="button">
              <img className="hibachi" src={centerpointe} /> Centerpointe
            </div>
          </button>

          <button className="food">
            <div className="button">
              <img className="hibachi" src={qdoba} /> Qdoba
            </div>
          </button>

          <button className="food">
            <div className="button">
              <img className="hibachi" src={bricbreak} /> Bric Break
            </div>
          </button>

          <button className="food">
            <div className="button">
              <img className="hibachi" src={fitbites} /> Fit Bites
            </div>
          </button>
      
      </div>
      
    </div>
    
  );
}

export default App;
