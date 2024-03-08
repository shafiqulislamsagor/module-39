import './App.css'

function App() {

  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button 2 click')
  }
  const sum = (num) =>{
    return alert(num + 10);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button> 
      <button onClick={handleClick2}>Click Me2</button> 
      <button onClick={() => {alert('hi suna')}}>Click Me3</button> 
      <button onClick={() => sum(5)}>sumthing value</button>
      
    </>
  )
}

export default App
