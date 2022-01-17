import logo from './logo.svg';
import './App.css';
import produce from 'immer';

function App() {

const toggleTodo = produce((draft, id) => {
	const todo = draft.find(todo => todo.id === id)
	todo.done = !todo.done
})

const baseState = [
	{
		id: 'JavaScript',
		title: 'Learn TypeScript',
		done: true
	},
	{
		id: 'Immer',
		title: 'Try Immer',
		done: false
	}
]


const nextState = toggleTodo(baseState, 'Immer')

console.log(nextState)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
				</header>
    </div>
  );
}

export default App;
