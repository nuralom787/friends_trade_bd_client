'use client';

import { useSession, signIn, signOut } from "next-auth/react"
import { FaSignOutAlt, FaUser } from "react-icons/fa";

const LoginButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <button onClick={() => signOut()}>
                    <FaSignOutAlt className="primary  cursor-pointer  md:text-3xl" />
                </button>
            </div>
        )
    }

    return (
        <div>
            <button onClick={() => signIn()}>
                <FaUser className="primary  cursor-pointer  md:text-3xl" />
            </button>
        </div>
    );
};

export default LoginButton;