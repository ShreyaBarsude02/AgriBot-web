// import React, { useEffect, useState } from 'react';

const Notification = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/notifications'); // Fetch from server API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Notifications
        </h1>
        <div className="space-y-4">
          {data.length === 0 ? (
            <p className="text-gray-500 text-center">No notifications available.</p>
          ) : (
            data.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                <h2 className="text-lg font-semibold text-gray-700">{item['Service Name']}</h2>
                <p className="text-gray-600">{item.Description}</p>
                <p className="text-sm text-gray-500">Maturity Level: {item['Maturity Level']}</p>
                <p className="text-sm text-yellow-500">⭐ {item['Star Rating']}</p>
                <div className="flex gap-4 mt-2">
                  <a
                    href={item['Service Link']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Service Link
                  </a>
                  <a
                    href={item['More Info Link']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    More Info
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
