import axios from "axios";

const getAllProducts = async () => {
    const baseURL = "http://localhost:3000" || process.env.NEXT_PUBLIC_BASE_URL;

    const result = await axios.get(`${baseURL}/products.json`)

    return result.data;
};

export default getAllProducts;