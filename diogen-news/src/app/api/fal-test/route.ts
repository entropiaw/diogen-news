import { NextResponse } from 'next/server';
import { generateImage } from '@ai-sdk/fal';

export async function GET() {
  const url = await generateImage({
    model: 'fal-ai/ben/v2',
    prompt: 'A minimalistic orange howitzer logo in flat style',
  });
  return NextResponse.json({ url });
}

