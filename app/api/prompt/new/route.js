import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

export const POST = async (req) => {
    const {userId, prompt, tag} = await req.json();
    const newPrompt = new Prompt({
        creator: userId,
        prompt,
        tag
    })
    try{
        await connectToDB();
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
        status: 201
    })
    }
    catch (error){
        return new Response("Failed to create a new Prompt", {
            status: 500
        })
    }
}