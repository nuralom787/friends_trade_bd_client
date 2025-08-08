import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const id = await params
    const result = await dbConnect("products").findOne({ _id: new ObjectId(id) });

    return Response.json(result);
}