import './App.css';
import {products} from "./data/productsList.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";

function App() {
    return (
      <div className="mx-auto max-w-200">
          {
              products.map((product, index) => <MyProduct key={index} product={product}/>)
          }
      </div>
  )
}

export default App
