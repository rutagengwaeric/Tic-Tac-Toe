import './TicTacToe.css'
const TicTacToe = () => {
  return (
    <div className="container">
        <h1 className="title"> Tic Tac Toe in <span>React</span> </h1>
      <div className="board"></div>
      <button className="reset"> Reset </button>
    </div>
  ) 
}

export default TicTacToe
