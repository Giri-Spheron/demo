import logo from "./logo.svg";
import "./App.css";

function App() {
  const env_variable = process.env.REACT_APP_KEY;
  console.log(env_variable);
  return (
    <div className='App'>
      <div className='main'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <h1 style={{ color: "white", marginTop: "100px" }}>
        Lets deploy our application on web3 infra
      </h1>
    </div>
  );
}

export default App;
