'use server';

import dbConnect from "@/lib/dbConnect";


const getAllProducts = async () => {
    try {
        const result = await dbConnect("products").find({}).toArray();
        return result;
    } catch (error) {
        return error
    }
};

export default getAllProducts;