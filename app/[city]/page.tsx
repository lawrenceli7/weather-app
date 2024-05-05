"use client"
import WeatherCard from '@/components/WeatherCard';
import { Divider } from 'antd';
import { useParams } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

interface WeatherData {
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;
}

const CityPage = () => {
    const params = useParams<{ city: string }>();
    const { data: response, error } = useSWR<{ days: WeatherData[] }>(
        `/api/getWeatherData?city=${params.city}`,
        (url: string) => fetch(url).then((response) => response.json())
    );

    if (error) return <div className="text-center text-lg mt-40">Failed to load</div>;
    if (!response) return <div className="text-center text-lg mt-40">Loading..</div>;

    const days = response.days;

    return (
        <main className="bg-[#c1defd] m-2 p-2 text-center text-[#333] h-screen rounded-md">
            <h1 className="text-center m-2 text-4xl font-semibold text-[#333]">{params.city}</h1>
            <Divider />
            <div className="flex flex-wrap justify-center gap-2 p-2 m-2 shadow-lg rounded-md">
                {days.map((weather, i) => (
                    <WeatherCard key={i} weather={weather} />
                ))}
            </div>
        </main>
    );
};

export default CityPage;
