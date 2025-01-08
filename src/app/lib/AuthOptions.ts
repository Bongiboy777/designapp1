import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "@/app/models/user"
import { connect } from "@/app/lib/storage_client";
import {defaultProfileImageUrls} from '@/app/lib/utils'

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        },
        
      },

      
    },),
    // ...add more providers here
  ],
  
callbacks: {
  async signIn({ profile }) {
    /* 
    1. Connect to MongoDB
    2. Check if user already exists in database
    3. If not, create user in database
    4. Return user

    */
   try{
    const connection = await connect();
    if(connection){
      // console.log(`Client: authoptions signIn: ${connection}`);
     const user = await User.findOne({email: profile!.email,});
     if(!user){
       const newUser = await User.create({email: profile!.email, userName: profile!.name!.slice(0,20), image: !profile!.image ? defaultProfileImageUrls[Math.round(Math.random()*defaultProfileImageUrls.length)] : profile?.image});
       return newUser;
     }
     return user

    }
   }
   catch(error){
    // console.log(`Client Error: authoptions signIn: ${error}`);
    throw error;
   }

  },
  async session({ session }) {
     /* 
     1. Get user from database.
     2. Assign session to user.
     3. return session
     */
    if(!session){
       throw new Error("No session found:");
    }
    const user = await User.findOne({email: session.user!.email});
    // console.log(`Client: authoptions session: ${user}`);
  
    if(!user){
      throw new Error("No user found");
    }
    session.user = {name: user.userName, email: user.email, image: user.image};
    return session;
  }
    
}
}

export default authOptions;