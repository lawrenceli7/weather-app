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
        <div className="flex flex-col justify-center items-center p-5 border border-black m-5 w-64 rounded-xl">
            <h2>{weather.datetime}</h2>
            <p>{weather.conditions}</p>
            <p>{weather.description}</p>
            <p>{weather.tempmin} - {weather.tempmax}</p>
        </div>
    );
}

export default WeatherCard;
