import { ObjectId } from "mongodb";
import dbConnect from "./dbConnect";

const getSingleProduct = async (id) => {
    const result = await dbConnect("products").findOne({ _id: new ObjectId(id) });
    // const res = result.json();
    return result;
};

export default getSingleProduct;