'use server';

import dbConnect, { collectionName } from "@/lib/dbConnect";


const getAllProducts = async () => {
    try {
        const result = await dbConnect(collectionName.PRODUCTS).find({}).toArray();
        return result;
    } catch (error) {
        return error
    }
};

export default getAllProducts;