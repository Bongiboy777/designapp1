import storage from '@/app/lib/storage_client'

export const GET = async () => {
    try{
        const storageClient = await storage()!;

        return new Response(JSON.stringify({"status":"message received"}), {status: 200});

    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({"status":"fault", "error":error}), {status: 500});
    }
 
}