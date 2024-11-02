import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./Pages/Home"
import ShowProduct from "./component/ShowProduct";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
           <Route path="/" element={<ShowProduct/>}/>
           <Route path="/add" element={<AddProduct/>}/>
           <Route path="/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
