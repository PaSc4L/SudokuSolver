import App from "../App";
import './SudokuSolver.css';

function i2rc(index: number) {
    return { row: Math.floor(index / 9), col: index % 9 };
}

// { row, col } -> index
function rc2i(row: number, col: number) {
    return row * 9 + col;
}

function acceptable(board: any, index: any, value: number) {
    let { row, col } = i2rc(index);

    // if already present on the column, not acceptable
    for (let r = 0; r < 9; ++r)
        if (board[rc2i(r, col)] == value) return false;

    // if already present on the row, not acceptable
    for (let c = 0; c < 9; ++c)
        if (board[rc2i(row, c)] == value) return false;

    // if already present in the same 3x3 square, also not acceptable
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[rc2i(r, c)] == value) return false;
        }
    }

    // we have a "go"
    return true;
}

function getChoices(board: any, index: any) {
    let choices = [];
    for (let value = 1; value <= 9; ++value) {
        if (acceptable(board, index, value)) {
            choices.push(value);
        }
    }
    return choices;
}
/*
function solve(index: number) {
    while (index < 81 && board[index]) ++index; // skip non-empty cells
    if (index == 81) return true;               // we filled'em all, success!
    let moves = getChoices(board, index);
    for (let m of moves) {
        board[index] = m;              // try one choice
        if (solve(index + 1))          // if we can solve for the next cell
            return true;               // then return true, success!
    }
    board[index] = 0;  // no move worked; we failed, clear the cell
    return false;      // and backtrack
}*/
function handleInputChangeSave (event:any){
    localStorage.setItem("1", event.target.value);
}
function handleClear (event:any){
    localStorage.clear();
    location.reload();
}
function SudokuSolver(){
    return (
        <>
            <App></App>
            <div className = "welcome-page-background">
                <div>
                    <div className= "sudoku-board">
                    <tr>
                        <td><input  type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")} /></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                        <td><input type="text" onChange={handleInputChangeSave} defaultValue= {localStorage.getItem("1")}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    </div>
                    <button className="btn btn-primary">Megoldás</button>
                    
                    <button className="btn btn-danger" onClick={handleClear}>Tisztítás</button>
                </div>
            </div>
        </>
    )
}
export default SudokuSolver;