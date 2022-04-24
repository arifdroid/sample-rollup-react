import logo from './logo.svg';
import './App.css';
import { Button, HButton, HSample } from './components'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Library App        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        {/* <Button>Button Library</Button> */}
        {/* <HButton>
          <HButton.Label >Label 2 </HButton.Label>
          <HButton.Icon></HButton.Icon>
        </HButton> */}
        <HSample/>
      </header>
    </div>
  );
}

export default App;
