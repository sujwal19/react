import { useState } from "react";
import { Search } from "lucide-react";

const App = () => {
  const [searchCity, setSearchCity] = useState("");
  const [city, setCity] = useState("Kathmandu");
  const [icon, setIcon] = useState("02d");
  const [temp, setTemp] = useState(17.12);
  const [humidity, setHumidity] = useState("39");
  const [windSpeed, setWindSpeed] = useState("4.12");
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!searchCity) {
      setError("Please Enter a City Name");
      return;
    }

    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}c&units=metric`,
      );

      if (!response.ok) {
        setError("City Not Found. Please try again");
        return;
      }
      const data = await response.json();

      console.log(data);
      setCity(data.name);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setIcon(data.weather[0].icon);
      setSearchCity("");
    } catch (error) {
      setError("Failed to fetch connection.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#1E1061] text-white">
      <main className="flex h-130 flex-col justify-between rounded-2xl border-2 border-gray-300 p-10">
        <div>
          <input
            type="text"
            className="mr-4 rounded-full border-2 px-5 py-2 outline-none"
            placeholder="Enter City Name"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="rounded-full border-2 border-white px-3.5 py-3.5 text-white"
          >
            <Search size={17} strokeWidth={3} className="text-white" />
          </button>
          {error && <p className="text-red-400">{error}</p>}
        </div>
        <div className="hero flex flex-col items-center gap-2">
          {icon && (
            <img
              className="h-40"
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather icon"
            />
          )}
          <h2 className="text-7xl font-semibold">{temp}'C</h2>
          <h3 className="mt-1 mb-3 text-2xl">{city}</h3>
        </div>
        <div className="flex flex-row justify-between">
          <div className="humidity">
            <h3 className="text-xl font-medium">{humidity}%</h3>
            <p className="text-sm text-gray-200">Humidity</p>
          </div>
          <div className="windspeed">
            <h3 className="text-xl font-medium">{windSpeed}km/ h</h3>
            <p className="text-sm text-gray-200">Wind Speed</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
