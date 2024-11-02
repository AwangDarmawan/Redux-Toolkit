import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteDataAsync, getDataAsync, productSelector } from '../features/ProductSlice';
import { Link } from 'react-router-dom';


const ShowProduct = () => {
     const dispatch =useDispatch();
     const products = useSelector(productSelector.selectAll)
     useEffect(() => {
        dispatch(getDataAsync())
     },[dispatch])
   
  return (
    <div className=' container  mx-auto my-20 box-border border-4  w-full h-full '>
        <Link to= "/add" className='bg-green-300  px-5 rounded  text-white'>Add Product</Link>
        <table className='table w-full text-center '>
            <thead>
                <tr className='bg-purple-900 text-white border-b-4'>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index) =>(
                <tr key={item.id}>
                     <td>{index +1}</td>
                     <td>{item.title}</td>
                     <td>{item.price} </td>
                     <td> 
                        <Link to={`/edit/${item.id}`} className='bg-blue-700 text-white w-16 px-3 h-8 border'>Edit</Link>
                        <button onClick={() => dispatch(DeleteDataAsync(item.id))} className='bg-red-600 text-white w-16 h-8 border'>Delete</button>
                     </td>
                 </tr>
                ))}
               
            </tbody>
        </table>
      
    </div>
  )
}

export default ShowProduct
