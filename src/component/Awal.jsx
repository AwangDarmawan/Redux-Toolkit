import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../features/Counter";


function Awal() {
    const count = useSelector ((state) =>state.counter.value);
    const dispatch = useDispatch();
  return (
    <>
    
      <div className="py-20 px-50">
        <div className=" container mx-auto">
           
            <button className="btn-primary" onClick={() => dispatch (increment())}>Increment</button>
            <span>{count}</span>
            <button className="bg-red-500 rounded-full h-10 w-50 px-5 text-white" onClick={() => dispatch (decrement())}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default Awal
