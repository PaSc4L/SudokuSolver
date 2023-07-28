import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Link} from "react-router-dom";
import Welcome from "./Components/Welcome";
import React, {useState} from "react";
import EmailForm from "./Components/EmailForm";

function App() {

  const [isShown, setIsShown] = useState(false);
  const handleSubscription = (event:React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsShown(true);
  }

  return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" >Sudoku Solver</a>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Kezdőlap</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/EmailForm">Feliratozás</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to = "/SudokuSolver">Sudoku megoldása</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className = "welcome-page-background">
          <div>
            <hr className="border border-white border-3 opacity-100"/>

          </div>
        </div>
      </>
  )
}

export default App
