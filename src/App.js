import { useState } from 'react';
import './App.css';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    '"If it hurts, do it more often."',
    '"Adding manpower to a late software project makes it later!"',
    '"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time."',
    '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."',
    '"Premature optimization is the root of all evil."',
    '"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."',
    '"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients."',
    '"The only way to go fast, is to go well."'
  ]
  
  const points = Array(anecdotes.length).fill(0)
  const [votes, setVote] = useState(points)
  const [selected, setSelected] = useState(0)

  const handleVote = (selected) => {
    const newVotes = votes.map((item, index) => index === selected ? item + 1 : item);
    setVote(newVotes);
  }
  
  const copyVotes = [...votes];
  const maxVoteValue = copyVotes.sort((a, b) => b - a)[0];
  const indexOfMaxVote = votes.indexOf(maxVoteValue);
  const randomAnecdote = () => Math.floor(Math.random() * (anecdotes.length + 1));
  return (
    <div className='content'>
      <h1>Anecdote of the day</h1>
      <spin className="text-font">{anecdotes[selected]}</spin>
      <br />
      <div className='votes'>has {votes[selected]} votes</div>
      <br />
      <div className="btns">
        <Button handleClick={() => handleVote(selected)} text={"vote"}/>
        <Button handleClick={() => setSelected(() => randomAnecdote())} text={"next anecdote"}/>
      </div>
      <h1>Anecdote with more votes</h1>
      <spin className="text-font">{anecdotes[indexOfMaxVote]}</spin>
      <div className='votes'>has {votes[indexOfMaxVote]} votes</div>
    </div>
  )
}
  

export default App;
