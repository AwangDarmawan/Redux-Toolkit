import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CreateDataAsync } from '../features/ProductSlice';
import {  useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [title, SetTitle] = useState('');
    const [price, SetPrice] = useState('');
    const dispatch = useDispatch ();
    const navigate =useNavigate();

    const CreateProduct = async(e) =>{
        e.preventDefault();
        await dispatch(CreateDataAsync({title,price}))
        navigate("/")
    }


    
  return (
    <>
     <form  onSubmit={CreateProduct} className="box-border border-4 bg-green-400 ">
        <div className='field  my-4 mx-6'>
            <label className="label ">Title</label>
            <div className='control'>
                <input type='text' 
                 className='input'
                 placeholder='title'
                 value={title}
                 onChange={(e) => SetTitle(e.target.value)}>
                </input>
            </div>
        </div>
        <div className='field  my-4 mx-6'>
            <label className="label">Price</label>
            <div className='control'>
                <input type='text' 
                className='input' 
                placeholder='price'
                value={price}
                onChange={(e) => SetPrice(e.target.value)}></input>
            </div>
        </div>
        <div className='field mx-6 my-3'>
            <button className='bg-blue-400 rounded-full w-20 h-10 font-serif '>Simpan</button>
            
        </div>
     </form>
    </>
  )
}

export default AddProduct
