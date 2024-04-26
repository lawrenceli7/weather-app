"use client"
import WeatherCard from "@/components/WeatherCard";
import { useParams } from "next/navigation";
import useSWR from "swr";

interface WeatherData {
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;
}

const CityPage = () => {
    const params = useParams<{ city: string }>();
    const { data: response, error } = useSWR<{ days: WeatherData[] }>(`/api/getWeatherData?city=${params.city}`, (url: string) => fetch(url).then((response) => response.json()));

    if (error) return <div>failed to load</div>;
    if (!response) return <div>loading..</div>;

    const days = response.days;

    return (
        <main className="bg-white m-2 p-2 text-center text-[#333] h-screen">
            <h1 className="text-center m-2 text-4xl font-semibold text-[#333]">{params.city}</h1>
            <div className="flex flex-wrap justify-center gap-2 p-2 m-2 bg-[#f0f0f0] shadow-lg border border-black rounded-md">
                {days.map((weather, i) => (
                    <WeatherCard key={i} weather={weather} />
                ))}
            </div>
        </main>
    );
};

export default CityPage;
