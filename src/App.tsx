import './App.css'
import MyComponent  from "./components/MyComponent.tsx";

function App() {
  return (
      <>
        <MyComponent text={"Hello, my dear!"}/>
        {MyComponent({text: "Hello again!"})}
      </>
  )
}

export default App
