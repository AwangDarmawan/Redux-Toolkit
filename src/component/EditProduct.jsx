import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAsync,getDataAsync,productSelector} from '../features/ProductSlice';
import { useNavigate, useParams } from 'react-router-dom';


const EditProduct = () => {
    const [title, SetTitle] = useState('');
    const [price, SetPrice] = useState('');
    const dispatch = useDispatch ();
    const navigate = useNavigate();
    const {id} = useParams();


    const product = useSelector ((state => productSelector.selectById(state,id)))

    useEffect(()=>{
        dispatch(getDataAsync())
    },[dispatch]);

    useEffect(()=>{
        if(product){
            SetTitle(product.title);
            SetPrice(product.price)
        }
    },[product]);

    const UpdateProduct = async(e) =>{
        e.preventDefault();
        await dispatch(UpdateAsync({id,title,price}))
        navigate("/")
    }
    
  return (
    <>
     <form  onSubmit={UpdateProduct} className="box-border border-4 bg-green-400 ">
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
            <button className='bg-blue-400 rounded-full w-20 h-10 font-serif '>Update</button>
            
        </div>
     </form>
    </>
  )
}

export default EditProduct
