import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionName } from "./dbConnect";

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
                const user = await dbConnect(collectionName.USERS).findOne({ email });

                // const user = { name: credentials.username, email: credentials.email, password: credentials.password };
                const passwordOk = password === user.password;
                // If no error and we have user data, return it
                if (passwordOk) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                // console.log({ user, account, profile, email, credentials });
                try {
                    const { provider, providerAccountId } = account;
                    const { email: user_email, image, name } = user;
                    const payload = { role: "user", provider, providerAccountId, user_email, image, name };
                    // console.log(payload);

                    const userCollection = dbConnect(collectionName.USERS);
                    const isUserExist = await userCollection.findOne({ providerAccountId });
                    if (!isUserExist) {
                        await userCollection.insertOne(payload)
                    }
                } catch (error) {
                    console.log(error);
                    return false
                }
            }
            return true
        },
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