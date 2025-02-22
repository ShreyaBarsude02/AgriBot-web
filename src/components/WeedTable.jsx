import React from 'react'
import { useParams, Link } from "react-router-dom";
import cropHerbicideData from "../data/crop_herbicide.json";

function WeedTable() {
 
    const { cropName } = useParams();
  const formattedCropName = cropName.charAt(0).toUpperCase() + cropName.slice(1);
  
  const relatedWeeds = cropHerbicideData.filter((entry) =>
    entry.Crop.toLowerCase().includes(cropName.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="text-3xl font-black">{formattedCropName} - Herbicide Guide</h1>

      {relatedWeeds.length > 0 ? (
        <table className="mt-6 w-full max-w-4xl text-sm border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Weed Species</th>
              <th className="border border-gray-300 px-4 py-2">Herbicide</th>
              <th className="border border-gray-300 px-4 py-2">Common Name</th>
            </tr>
          </thead>
          <tbody>
            {relatedWeeds.map((weed, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-gray-300 px-4 py-2">{weed.Weed_Species}</td>
                <td className="border border-gray-300 px-4 py-2">{weed.Herbicide}</td>
                <td className="border border-gray-300 px-4 py-2">{weed.Common_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 mt-4">No data available for {formattedCropName}.</p>
      )}
    </div>
  )
}

export default WeedTable