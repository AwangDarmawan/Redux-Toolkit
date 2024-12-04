import axios from "axios";
const port =  import.meta.env.VITE_PORT;
export const fetchData = async () => {
        let response = await axios.get(`${port}/products`);
        return response.data;
    
};

export const CreateData = async ({title,price}) => {
    const response = await axios.post(`${port}/products`,{
        title,
        price
    });
    return response.data;

};

export const UpdateData = async ({id,title,price}) => {
    const response = await axios.patch(`${port}/products/${id}`
    ,{
        title,
        price
    }
);
    return response.data;

};

export const Delete = async (id) => {
     await axios.delete(`${port}/products/${id}`);
    return id;

};