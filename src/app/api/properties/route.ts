import * as storage from '@/app/lib/storage_client'

export const GET = async () => {
    if (await storage.connect()) {
        return new Response(JSON.stringify({"status":"message received"}), {status: 200});
    }
    return new Response(JSON.stringify({"status":"fault"}), {status: 500});
}