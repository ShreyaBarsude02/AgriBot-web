// src/components/Notification.jsx
import React, { useEffect, useState } from 'react';

const Notification = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/data/notification.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching the JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">{item['Service Name']}</h2>
          <p className="text-gray-700 mb-2">{item.Description}</p>
          <p className="text-gray-500 mb-2">Maturity Level: {item['Maturity Level']}</p>
          <p className="text-gray-500 mb-2">Star Rating: {item['Star Rating']}</p>
          <a
            href={item['Service Link']}
            className="text-blue-500 hover:underline mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Link
          </a>
          <a
            href={item['More Info Link']}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info
          </a>
        </div>
      ))}
    </div>
  );
};

export default Notification;
