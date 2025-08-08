import dbConnect from "./dbConnect";

const getAllProducts = async () => {
    const result = await dbConnect("products").find({}).toArray();
    // const res = result.json();
    return result;
};

export default getAllProducts;