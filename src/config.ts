import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
});

const openAI = new OpenAIApi(config);

export default openAI;