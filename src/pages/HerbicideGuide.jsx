import React, { useState, useEffect } from "react";
import cropHerbicide from "../data/crop_herbicide.json";
import herbicideData from "../data/herbicide.json"; 
import { Link } from "react-router-dom";

function HerbicideGuide() {
  const [input, setInput] = useState("");
  const [translatedInput, setTranslatedInput] = useState("");
  const [result, setResult] = useState(null);

  const translateToEnglish = async (text) => {
    const apiKey = "AIzaSyAwxvJpNaC1LPXD2ib5bn57RdYxgrtcV3Q"; // Replace with your actual API key
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
      <div className="w-[60vw] mt-28 flex justify-between items-center">
      <Link to="herbicide-info">
        <div className="bg-gray-200 w-[20vw] h-[15vh] flex justify-center items-center opacity-70 rounded-2xl text-xl hover:bg-green-200 hover:font-semibold">
          Herbicide Information
        </div>
        </Link>
        <Link to="weed-info">
        <div className="bg-gray-200 w-[20vw] h-[15vh] flex justify-center items-center opacity-70 rounded-2xl text-xl hover:bg-green-200 hover:font-semibold">
        Specific Weeds in Crops
        </div></Link>
          
        
     
      </div>
    </div>
  );
}

export default HerbicideGuide;
