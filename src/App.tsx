import './App.css'
import MyComponent  from "./components/MyComponent.tsx";

function App() {
  return (
      <>
        <MyComponent title={"Hello, my dear!"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laudantium magni odio reprehenderit repudiandae veniam!
        </MyComponent>
        <MyComponent title={"Hello again!"}/>
      </>
  )
}

export default App
