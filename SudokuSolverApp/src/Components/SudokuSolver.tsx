import { json } from "react-router-dom";
import App from "../App";
import './SudokuSolver.css';
import { useEffect, useState } from "react";


function SudokuSolver(){

    const loadingSudoku = () =>{

        for(let i =0; i<9; i++){
            for(let j = 0; j<9; j++)
            {
                let id = i.toString() + j.toString();
                board[i][j]= Number(localStorage.getItem(id));
            }
        }
    }
    useEffect(()=>{
    loadingSudoku()
    },[])

    const [board, setBoard] = useState<number[][]>([ [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]);
    
    const isSafe = (board: number[][], row: number, col: number, num: number) =>{

	// Row has the unique (row-clash)
	for(let d = 0; d < board.length; d++)
	{
		
		// Check if the number we are trying to
		// place is already present in
		// that row, return false;
		if (board[row][d] == num)
		{
			return false;
		}
	}

	// Column has the unique numbers (column-clash)
	for(let r = 0; r < board.length; r++)
	{
		
		// Check if the number
		// we are trying to
		// place is already present in
		// that column, return false;
		if (board[r][col] == num)
		{
			return false;
		}
	}

	// Corresponding square has
	// unique number (box-clash)
	let sqrt = Math.floor(Math.sqrt(board.length));
	let boxRowStart = row - row % sqrt;
	let boxColStart = col - col % sqrt;

	for(let r = boxRowStart;
			r < boxRowStart + sqrt; r++)
	{
		for(let d = boxColStart;
				d < boxColStart + sqrt; d++)
		{
			if (board[r][d] == num)
			{
				return false;
			}
		}
	}

	// If there is no clash, it's safe
	return true;
    }

    const solveSudoku = (board: number[][], n: number) =>{

        let row = -1;
        let col = -1;
        let isEmpty = true;
        for(let i = 0; i < n; i++)
        {
            for(let j = 0; j < n; j++)
            {
                if (board[i][j] == 0)
                {
                    row = i;
                    col = j;
    
                    // We still have some remaining
                    // missing values in Sudoku
                    isEmpty = false;
                    break;
                }
            }
            if (!isEmpty)
            {
                break;
            }
        }
    
        // No empty space left
        if (isEmpty)
        {
            return true;
        }
    
        // Else for each-row backtrack
        for(let num = 1; num <= n; num++){

            if (isSafe(board, row, col, num)){   

                board[row][col] = num;
                if (solveSudoku(board, n)){

                    setBoard(board);
                    // print(board, n);
                    return true;    
                }
            }
            board[row][col] = 0;
        }
        return false;
    }
    
    
    
    // Driver Code
    const solver = () =>{
        
        let cantSolve = false;

        let N = board.length;
        let temp = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];

        for (let i =0; i<9; i++){
            for (let j =0; j<9; j++){
                let element = (document.getElementById(i.toString() + j.toString()) as HTMLInputElement).value;
                if(!element){
                    element = '0';
                }
                console.log(element);
                if((!isSafe(temp,i,j,Number(element)) && Number(element)>0)){
                    cantSolve=true;
                }
                temp[i][j] = Number(element);
            }
        }
        if(!cantSolve){

            if (solveSudoku(board, N))
            {
                
                for (let i =0; i<9; i++){
                    for (let j =0; j<9; j++){
                        let id = i.toString()+j.toString();
                        let htmlElement = (document.getElementById(id) as HTMLInputElement);
                        if(localStorage.getItem(id)){
                            //localStorage.setItem(id,board[i][j].toString());
                            console.log(htmlElement)
                            htmlElement.style.fontWeight = 'bold';
                            htmlElement.style.backgroundColor = 'green';
                        }
                        htmlElement!.value = board[i][j].toString();
                    }
                }
            }
        }
        else{
            alert("Hiba: a sudoku nem megoldható!");
        }
    }

    const handleInputChangeSave = (event:any) =>{
        let i = event.currentTarget.id.charAt(0).toString();
        let j = event.currentTarget.id.charAt(1).toString();
        board[i][j] = Number(event.target.value);
        localStorage.setItem(event.currentTarget.id, event.target.value);
        console.log(board);
    }

    const handleClear = (event:any) =>{    
        localStorage.clear();
        location.reload();
    }
    loadingSudoku();
    //table.map((table, index) => <td><input type="text" onChange={handleInputChangeSave} defaultValue={table} id={index.toString()}/></td>)
    return (
        <>
            <App></App>
            <div className = "welcome-page-background">
                <div>
                    <div className= "sudoku-board">
                        {board.map((row, i) => (
                        <tr key={i}>
                            {row.map((col, j) => (
                            <td><input type= "text"  onChange={handleInputChangeSave} key={j} defaultValue={col<=0 ? "" : col} id={i.toString() + j.toString()}/> </td>
                            ))}
                        </tr>
                        ))}
                            
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary" onClick={solver}>Megoldás</button>
                        <button className="btn btn-danger" onClick={handleClear}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SudokuSolver;