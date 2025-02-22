import React, { useState, useEffect } from "react";
import cropHerbicide from "../data/crop_herbicide.json";
import herbicideData from "../data/herbicide.json"; 
import { Link, useNavigate } from "react-router-dom";

function HerbicideGuide() {
  const [input, setInput] = useState("");
  const [translatedInput, setTranslatedInput] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const crops = [
    { name: "Wheat", image: "/assets/crops/wheat.jpg" },
    { name: "Rice", image: "/assets/crops/rice.jpg" },
    { name: "Cotton", image: "/assets/crops/cotton.jpg" },
    { name: "Maize", image: "/assets/crops/maize.jpg" },
    { name: "Soyabean", image: "/assets/crops/soyabean.jpg" },
    { name: "Sugarcane", image: "/assets/crops/sugarcane.jpg" },
    { name: "Tea", image: "/assets/crops/tea.jpg" },
  ];

  const translateToEnglish = async (text) => {
    const apiKey = "abc"; // Replace with your actual API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const requestBody = {
      q: text,
      source: "auto",  // Detects the language automatically
      target: "en",    // Translates to English
      format: "text",
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
  
      const data = await response.json();
      console.log(data)
      return data.data.translations[0].translatedText; // Returns translated text
    } catch (error) {
      console.error("Translation Error:", error);
      return text; // Return original text if translation fails
    }
  };



  const handleSearch = async () => {
    const translated = await translateToEnglish(input);
    setTranslatedInput(translated);

    const herbicideInfo = cropHerbicide[translated];
    if (herbicideInfo) {
      setResult(`Recommended Herbicide: ${herbicideInfo}`);
    } else {
      setResult("Not Found");
    }
  };

  return (
    <div className="pt-[10vh] flex flex-col items-center justify-center">
      <h1 className="mt-9 font-black text-3xl">Herbicide Guide</h1>
      <div className="bg-stone-200 w-[90vw] mt-9 flex flex-col items-center p-9">
        <div className="flex items-center">
          <p>Enter Weed Name:</p>
          <input
            type="text"
            placeholder="Enter weed name"
            className="mx-3 px-2 border border-gray-600 rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {translatedInput && <p className="mt-4">Translated: {translatedInput}</p>}
        {result && <p className="mt-4">{result}</p>}
      </div>
      {/* <div className="w-[60vw] mt-28 flex justify-between items-center">
      <Link to="herbicide-info">
        <div className="bg-gray-200 w-[20vw] h-[15vh] flex justify-center items-center opacity-70 rounded-2xl text-xl hover:bg-green-200 hover:font-semibold">
          Herbicide Information
        </div>
        </Link>
        <Link to="weed-info">
        <div className="bg-gray-200 w-[20vw] h-[15vh] flex justify-center items-center opacity-70 rounded-2xl text-xl hover:bg-green-200 hover:font-semibold">
        Specific Weeds in Crops
        </div></Link>
          
        
     
      </div> */}
      <div>
      <div className="flex flex-col justify-center items-center pt-12 pb-9">
      
      <p className="mt-2 mx-9 text-center text-gray-700 max-w-3xl text-lg font-medium italic mb-4">
        Click on a crop to see the weeds and herbicides associated with it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-36 mt-8">
        {crops.map((crop) => (
          <div key={crop.name} className="w-72">
            <button
              className="w-full bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
              onClick={() => navigate(`/crop/${crop.name.toLowerCase()}`)}
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">{crop.name}</h2>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default HerbicideGuide;
