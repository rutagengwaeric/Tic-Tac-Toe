
import { useState } from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'
import './TicTacToe.css'
import { useRef } from 'react'


// Initial state of the game grid with empty cells
let data = ["","","","","","","","",""]

const TicTacToe = () => {
      
    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let winnerTitle = useRef(null);


    const toggle = (e,num)=>{
        if(lock || data[num]!== ""){
            return 0
        }
        if(count%2===0){
            data[num] = "X"
            e.target.innerHTML = `<img src=${cross_icon} alt="cross" />`
            setCount(++count)
        }else{
            data[num] = "O"
            e.target.innerHTML = `<img src=${circle_icon} alt="circle" />`
            setCount(++count)
        }
        checkWinner();
    }

    const checkWinner = ()=>{
      
        // Winning combinations
        let winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i=0;i<winningCombinations.length;i++){
            let [a,b,c] = winningCombinations[i]
            if(data[a]!== "" && data[a]===data[b] && data[b]===data[c]){  
                won(data[a])
            }
        }
        // If all cells are filled and no one wins
        if(count===9){
            winnerTitle.current.innerHTML = `It's a draw!`;
            setLock(true)
        } 
        return false      
    }

    const won = (winner) => {
        setLock(true)
        if(winner == 'X'){
            winnerTitle.current.innerHTML = `Congratulations <span> X </span> !`;
        }
        else{
            winnerTitle.current.innerHTML = `Congratulations <span> O </span> !`;
        }
    }
    const reset = ()=>{
        data = ["","","","","","","","",""]
        setCount(0)
        setLock(false)
        winnerTitle.current.innerHTML = `Tic Tac Toe in <span>React</span>`;
        document.querySelectorAll('.boxes').forEach(box => box.innerHTML = '')
    };





  return (
    <div className="container">
        <h1 className="title" ref={winnerTitle}> Tic Tac Toe in <span>React</span> </h1>
      <div className="board">
          <div className="row1">
                <div className="boxes" onClick={(e)=> {toggle(e,0)}} > </div>
                <div className="boxes" onClick={(e)=> {toggle(e,1)}}> </div>
                <div className="boxes" onClick={(e)=> {toggle(e,2)}}> </div>
          </div>
          <div className="row2">
                <div className="boxes" onClick={(e)=> {toggle(e,3)}}> </div>
                <div className="boxes" onClick={(e)=> {toggle(e,4)}}> </div>
                <div className="boxes" onClick={(e)=> {toggle(e,5)}}> </div>
          </div>
          <div className="row3">
                <div className="boxes" onClick={(e)=> {toggle(e,6)}}> </div>
                <div className="boxes" onClick={(e)=> {toggle(e,7)}}> </div>
                <div className="boxes" onClick={(e)=> {toggle(e,8)}}> </div>
          </div>

      </div>
      <button className="reset" onClick={reset}> Reset </button>
    </div>
  ) 
}

export default TicTacToe
