import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const UserAccount = async () => {
    const session = await getServerSession(authOptions);
    return (
        <section className="container-width px-3 md:px-6 py-10 text-center">
            {JSON.stringify(session)}
        </section>
    );
};

export default UserAccount;