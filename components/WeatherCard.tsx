import { Card } from "antd";
interface Weather {
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;
}

interface WeatherCardProps {
    weather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
    return (
        <Card>
            <div className="flex flex-col justify-center items-center p-5 border border-black m-5 w-64 rounded-xl">
                <h2 className="text-xl">{weather.datetime}</h2>
                <p className="text-gray-400 text-lg">{weather.conditions}</p>
                <div className="flex justify-center items-center gap-2 font-semibold text-lg">
                    <p>Low: {weather.tempmin}°</p>
                    <p>High: {weather.tempmax}°</p>
                </div>
                <p className="text-base">{weather.description}</p>
            </div>
        </Card>
    );
}

export default WeatherCard;
