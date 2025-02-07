import { getServerSession } from "next-auth";
import authOptions from "@/app/lib/AuthOptions";


const getUser = async () => {
    const serverSession = await getServerSession(authOptions);
    if (!serverSession) {
        throw new Error("No server session found");
    }
    if (!serverSession.user) {
       throw new Error("No user found in server session");
    }

    if (!serverSession.user.email) {
        throw new Error("No user email found in server session");
    }
    const user = serverSession.user;
    const userId = user?.email;
    return {
        name: user.name,
        email: user.email,
    }
}

export default getUser;