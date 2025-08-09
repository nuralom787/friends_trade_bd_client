'use server';

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const getSingleProduct = async (id) => {
    try {
        const result = await dbConnect("products").findOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        return error
    }
};

export default getSingleProduct;