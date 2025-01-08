import { FaGoogle, FaGithub, FaQuestion } from "react-icons/fa";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;




export const getProperties = async () => {
    if(!apiUrl){
        return [];
    }
    try{
        const fetchUrl = `${apiUrl}/properties`;
        // console.log(fetchUrl);
        const res = await fetch(fetchUrl);
        if (!res.ok || res.status != 200) {
            throw new Error('Failed to fetch properties');
        }
        return res.json();
    }
    catch (error: unknown) {
        console.error(error);
        return [];
    }
};
export const getPropertyById = async (id: string) => {
    if(!apiUrl){
        return [];
    }
    try{
        const res = await fetch(`${apiUrl}/properties/?id=${id}`);
        if (!res.ok || res.status != 200) {
            throw new Error('Failed to fetch properties');
        }
        return res.json();
    }
    catch (error: unknown) {
        console.error(error);
        return [];
    }
};

export const defaultProfileImageUrls = [
    "https://plus.unsplash.com/premium_vector-1714076542218-98ec5469bb97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxkZGM5NjVvbHlqd3x8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_vector-1714076542617-9d2e5b8beca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxkZGM5NjVvbHlqd3x8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_vector-1713902747403-694707a5f6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xkZGM5NjVvbHlqd3x8ZW58MHx8fHx8"

] 





export const getProviderLabel = (provider: string) => {
    switch (provider) {
        case 'google':
            return (<FaGoogle className="self-stretch my-auto cursor-pointer mr-2" size={24} />);
        case 'github':
            return (<FaGithub className="self-stretch my-auto cursor-pointer mr-2" size={24} />);
        default:
            return (<FaQuestion className="self-stretch my-auto cursor-pointer mr-2" size={24} />);
    }
};


