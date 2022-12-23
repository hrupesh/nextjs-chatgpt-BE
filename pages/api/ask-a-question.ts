import type { NextApiRequest, NextApiResponse } from "next";
import openAI from "../../src/config";

type Data = {
  result?: string | undefined;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req?.body?.question){
    res.status(400).json({ error: 'Invalid params' })
  }

  const completion = await openAI.createCompletion({
    model: 'text-davinci-003',
    prompt: req?.body?.question,
    temperature: 0.8,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data?.choices?.[0]?.text });
}