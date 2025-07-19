import axios from "axios";

const getAllProducts = async () => {

    const result = await axios.get("http://localhost:3000/products.json")

    return result.data;
};

export default getAllProducts;