import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Welcome from "./Components/Welcome";

function App() {

  return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Sudoku Solver</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Kezdőlap</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Feliratozás</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Sudoku megoldása</a>
                </li>
              </ul>
            </div>

          </div>

        </nav>
        <Welcome></Welcome>
      </>
  )
}

export default App
