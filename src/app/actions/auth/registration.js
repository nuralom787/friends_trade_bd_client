'use server';

import dbConnect from "@/lib/dbConnect";

const registerUser = async (payload) => {

    try {
        // Need To Check Unique User.
        const result = await dbConnect("users").insertOne(payload);
        return result;
    } catch (error) {
        return error
    }
};

export default registerUser;