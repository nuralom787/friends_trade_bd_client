import dbConnect from "@/lib/dbConnect";

export async function GET() {
    const result = await dbConnect("products").find({}).toArray();
    return Response.json(result);
};


// export async function POST() {

// };