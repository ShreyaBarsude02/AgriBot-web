import React, { useEffect, useState } from "react";
import { WiThermometer, WiRaindrop, WiHumidity, WiBarometer } from "react-icons/wi";
import { FaLeaf } from "react-icons/fa";
import axios from "axios";

const Monitoring = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=19.076&longitude=72.8777&current_weather=true`
        );
        setWeather(response.data.current_weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const farmData = [
    { icon: <WiBarometer size={40} />, label: "pH Level", value: "6.5", unit: "pH" },
    { icon: <FaLeaf size={30} />, label: "NPK Levels", value: "120-50-60", unit: "mg/kg" },
    { icon: <WiRaindrop size={40} />, label: "Soil Moisture", value: "23", unit: "%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-[12vh]">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Farm Monitoring Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {loading ? (
          <p>Loading weather data...</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <WiThermometer size={40} className="text-red-500" />
            <div>
              <h2 className="text-lg font-semibold">Temperature</h2>
              <p className="text-gray-700">{weather.temperature}°C</p>
            </div>
          </div>
        )}

        {loading ? null : (
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <WiHumidity size={40} className="text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Humidity</h2>
              <p className="text-gray-700">{weather.relative_humidity}%</p>
            </div>
          </div>
        )}

        {farmData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="text-green-600">{item.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{item.label}</h2>
              <p className="text-gray-700">{item.value} {item.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monitoring;
