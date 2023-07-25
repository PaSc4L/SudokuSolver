import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SudokuSolver from "./Components/SudokuSolver";
import Welcome from "./Components/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome></Welcome>,
    },
    {
        path: "sudokuSolver",
        element: <SudokuSolver></SudokuSolver>,
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
