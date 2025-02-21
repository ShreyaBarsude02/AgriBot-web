import React, { useState, useEffect } from "react";
import cropHerbicide from "../data/crop_herbicide.json";
import herbicideData from "../data/herbicide.json"; 

function HerbicideGuide() {
  const [input, setInput] = useState("");
  const [translatedInput, setTranslatedInput] = useState("");
  const [result, setResult] = useState(null);

  // Function to translate input to English (Mock API call)
  const translateToEnglish = async (text) => {
    // Call Google Translate API (replace this with actual translation logic)
    return text; // For now, assuming input is already in English
  };

//   const translateToEnglish = async (text) => {
//     const apiKey = "YOUR_GOOGLE_TRANSLATE_API_KEY"; // Replace with your actual API key
//     const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
//     const requestBody = {
//       q: text,
//       source: "auto",  // Detects the language automatically
//       target: "en",    // Translates to English
//       format: "text",
//     };
  
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestBody),
//       });
  
//       const data = await response.json();
//       return data.data.translations[0].translatedText; // Returns translated text
//     } catch (error) {
//       console.error("Translation Error:", error);
//       return text; // Return original text if translation fails
//     }
//   };



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
      <div className="bg-pink-200 w-[90vw] mt-9 flex flex-col items-center p-9">
        <div className="flex">
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
      <div className="bg-pink-200 w-[90vw] mt-9 flex flex-col items-center">
      <table className="w-full border-collapse border border-gray-500">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-500 px-4 py-2">Herbicide</th>
              <th className="border border-gray-500 px-4 py-2">Dosage (a.i.)</th>
              <th className="border border-gray-500 px-4 py-2">Dosage Formulation</th>
              <th className="border border-gray-500 px-4 py-2">Dilution in Water</th>
              <th className="border border-gray-500 px-4 py-2">Waiting Period</th>
            </tr>
          </thead>
          <tbody>
            {herbicideData.map((herbicide, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-gray-500 px-4 py-2">{herbicide.Herbicide}</td>
                <td className="border border-gray-500 px-4 py-2">{herbicide["Dosage/ha a.i. (g,kg)"]}</td>
                <td className="border border-gray-500 px-4 py-2">{herbicide["Average Dosage/ha Formulation (g,mL)"]}</td>
                <td className="border border-gray-500 px-4 py-2">{herbicide["Dilution in Water (L)"]}</td>
                <td className="border border-gray-500 px-4 py-2">{herbicide["Waiting Period (days)"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HerbicideGuide;
