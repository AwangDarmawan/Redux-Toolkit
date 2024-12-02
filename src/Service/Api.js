import axios from "axios";
const API_URL =  import.meta.env.VITE_BASE_URL;
export const fetchData = async () => {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    
};

export const CreateData = async ({title,price}) => {
    const response = await axios.post(`${API_URL}/products`,{
        title,
        price
    });
    return response.data;

};

export const UpdateData = async ({id,title,price}) => {
    const response = await axios.patch(`${API_URL}/products/${id}`
    ,{
        title,
        price
    }
);
    return response.data;

};

export const Delete = async (id) => {
     await axios.delete(`${API_URL}products/${id}`);
    return id;

};