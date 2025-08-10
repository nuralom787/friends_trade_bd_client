import dbConnect from "@/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'UserName & Password',
            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, email, password } = credentials;
                const user = await dbConnect("users").findOne({ email });

                // const user = { name: credentials.username, email: credentials.email, password: credentials.password };
                const passwordOk = password === user.password;
                // If no error and we have user data, return it
                if (passwordOk) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            if (token) {
                session.user.username = token.username
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.username = user.displayName
                token.role = user.role
            }
            return token
        }
    }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }