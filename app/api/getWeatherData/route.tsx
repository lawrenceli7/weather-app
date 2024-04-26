import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

const WEATHER_API_KEY: string | undefined = process.env.API_KEY;

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const city = url.searchParams.get("city");

    if (!city) {
        return NextResponse.json({ error: "No city provided" }, { status: 400 });
    }

    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
    );

    if (response.status !== 200) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    const data = await response.json();

    return NextResponse.json(data);
}