'use server';

import dbConnect, { collectionName } from "@/lib/dbConnect";

const registerUser = async (payload) => {

    try {
        // Need To Check Unique User.
        const result = await dbConnect(collectionName.USERS).insertOne(payload);
        return result;
    } catch (error) {
        return error
    }
};

export default registerUser;