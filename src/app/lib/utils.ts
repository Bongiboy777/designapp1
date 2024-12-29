const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getProperties = async () => {
    if(!apiUrl){
        return [];
    }
    try{
        const fetchUrl = `${apiUrl}/properties`;
        console.log(fetchUrl);
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
