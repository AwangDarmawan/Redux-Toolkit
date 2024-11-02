import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { CreateData, Delete, fetchData, UpdateData } from "../Service/Api";
export const getDataAsync = createAsyncThunk(
    'product/fetchData',
    async () => {
        const response = await fetchData();
        return response;
    }
);

export const CreateDataAsync = createAsyncThunk(
    'product/CreateData',
    async ({title,price}) => {
        const response = await CreateData({title,price});
        return response;
    }
);
export const UpdateAsync = createAsyncThunk(
    'product/UpdateData',
    async ({id,title,price}) => {
        const response = await UpdateData({id,title,price});
        return response;
    }
);
export const DeleteDataAsync = createAsyncThunk(
    'product/Delete',
    async (id) => {
         await Delete(id);
        return id;
    }
);


const productEntity = createEntityAdapter({
    selectId: (product) => product.id
})

const ProductSlice = createSlice({
    name:"product",
    initialState : productEntity.getInitialState(),
    extraReducers: (builder) => { 
        builder
            .addCase(getDataAsync.fulfilled, (state, action) => {
                productEntity.setAll(state, action.payload); 
            })
            .addCase(CreateDataAsync.fulfilled, (state, action) => {
                console.log("Data berhasil ditambahkan:", action.payload); 
                productEntity.addOne(state, action.payload); 
            })
            .addCase(UpdateAsync.fulfilled, (state, action) => {
                console.log("Edit:", action.payload); 
                productEntity.updateOne(state, {id: action.payload.id, updates:action.payload}); 
            })
            .addCase(DeleteDataAsync.fulfilled, (state, action) => {
                console.log("Data berhasil delete:", action.payload); 
                productEntity.removeOne(state, action.payload); 
            });
       
    }
});

export  const productSelector = productEntity.getSelectors(state =>state.product)
export default ProductSlice.reducer;