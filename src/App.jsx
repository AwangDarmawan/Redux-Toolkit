import { BrowserRouter, Route, Routes } from "react-router-dom"
import Awal from "./component/Awal"


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
           <Route path="/" element={<Awal/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
