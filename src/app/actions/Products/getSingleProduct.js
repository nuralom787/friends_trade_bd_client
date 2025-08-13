'use server';

import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const getSingleProduct = async (id) => {
    try {
        const result = await dbConnect(collectionName.PRODUCTS).findOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        return error
    }
};

export default getSingleProduct;