import './App.css'
import {ProductsList} from "./components/products-list/ProductsList.tsx";

function App() {

  return (
    <div className="px-4 py-8 flex flex-col items-center justify-center bg-linear-135 from-gray-400 from-0% via-red-200 via-55% to-gray-50 to-100%">
      <ProductsList/>
    </div>
  );
}

export default App;
