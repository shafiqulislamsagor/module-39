import "./App.css";
import Rounter from "./Rount";
import Team from "./Team";
import Users from "./User";
import Friend from './Friends';

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button 2 click");
  };
  const sum = (num) => {
    return alert(num + 10);
  };

  return (
    <>
      <h1>Vite + React</h1>
      
      <Friend></Friend>
      <Users></Users>
      <Team></Team>
      <Rounter></Rounter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button
        onClick={() => {
          alert("hi suna");
        }}
      >
        Click Me3
      </button>
      <button onClick={() => sum(5)}>sumthing value</button>
    </>
  );
}

export default App;
