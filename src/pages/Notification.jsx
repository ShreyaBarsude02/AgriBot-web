// src/components/Notification.jsx
import React, { useEffect, useState } from 'react';
import '/src/assets/Notification.css'; // Ensure this path is correct

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
    <div className="notification-container ">
      <div className="notification-box ">
        <h1 className="notification-heading ">Notifications</h1>
        <div className="notification-content">
          {data.map((item, index) => (
            <div key={index} className="notification-item">
              <h2>{item['Service Name']}</h2>
              <p>{item.Description}</p>
              <p>Maturity Level: {item['Maturity Level']}</p>
              <p>Star Rating: {item['Star Rating']}</p>
              <a
                href={item['Service Link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Service Link
              </a>
              <a
                href={item['More Info Link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
