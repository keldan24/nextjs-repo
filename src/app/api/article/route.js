import { articles } from "../../../../data"

export async function GET(req){
    return new Response(JSON.stringify(articles), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}