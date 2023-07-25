import './Welcome.css';
import App from "../App";
function Welcome(){
    return (
            <>
                <App></App>
                <div className = "welcome-page-background">
                    <hr className="border border-white border-2 opacity-100"/>
                    <img src="../Images/sudoku-background.jpg"/>
                    <h1>Olld meg a sudokut Sudoku Solverrel!</h1>
                    <div className="welcome-paragraphs">
                        <p>Próba szüveg ajfnjipsnfvjsdnvjiéasdnvjisdnvjild vjibsdvjiosdjiovb sdjiovb jisdb vjhiodvb sdbv jhi</p>
                        <p>Próba szöveg csak egy kicsit több, mert sajtos makaróni és éertelmesebb pohár tele van vízzel és</p>
                    </div>
                </div>

            </>
    );
}
export default Welcome;