import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'UserName & Password',
            credentials: {
                email: { label: "Email", type: "email" },
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // const res = await fetch("/your/endpoint", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()
                const user = { name: credentials.username, email: credentials.email };

                // If no error and we have user data, return it
                if (user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ]
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }