import logo from './logo.svg';
import './App.css';
import ClassComponent from './app/components/practice1/ClassPractice';
import Car from './app/components/practice1/ClassPractice1';
import MyComponent from './app/components/practice1/FunctionPractice';
import Cat from './app/components/practice1/FunctionPractice';
import Apps from './app/components/practice1/FunctionPractice1';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React Directory Stuctuer (Home Work In React)
        </a>
      </header> */}
      <MyComponent />
      <Apps />
      <Car />
      <ClassComponent />
    </div>
  );
}

export default App;
