import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import backgroundImage from '/bg-hero.png';
import "@fontsource/dm-sans"; // Default 400 weight
import "@fontsource/dm-sans/700.css"; // Import specific weights


function Home() {
  const features = [
    {
      img: 'img1.jpg',
      title: 'AI-Powered Weed Detection Bot',
      desc: 'Find crop-specific weeds',
    },
    {
      img: 'weedicide.jpg',
      title: 'Herbicide Guide',
      desc: 'Get herbicide recommendations',
    },
    {
      img: 'update.png',
      title: 'Government Updates',
      desc: 'Stay informed on guidelines',
    },
    {
      img: 'monitoring.png',
      title: 'Specific Farm Monitoring',
      desc: 'Monitor your farm',
    },
    {
      img: 'farm-comm.png',
      title: 'Farmer Community',
      desc: 'Connect & share knowledge',
    },
    {
      img: 'weed-recomend.jpg',
      title: 'Weed Identification',
      desc: 'Find crop-specific weeds',
    },
  ];

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image
    width: '100%',
    height: '60vh',
    opacity: 0.6 // Sets the div height to full viewport height
  };

  return (
    <div className="bg-white pt-[10vh] pb-9">
      {/* Hero Section */}
      <div className="h-[30vh] flex flex-col justify-center items-center bg-[#3E7B25] shadow-xl" style={divStyle}>
      <h1 className="font-black text-3xl pb-3 text-[#123524] font-[DM Sans]">
  Empowering Indian Farmers with Smart Weed Management
</h1>


        <p className="text-[#123524] font-bold tracking-wide italic text-xl">
          <Typewriter
            words={['Throw Away Weeds, Protect Our Fields']}
            loop={0}
            cursor={false}
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </p>
      </div>

      {/* Introduction Section */}
      <div className="m-9 bg-white-50 p-9 text-justify rounded-2xl shadow-xl">
        <p className="text-green-800">
          India’s farmers face significant challenges in managing weeds, which
          reduce crop yields and increase labor costs. Many farmers lack
          accurate information on which weeds affect their crops, the right
          herbicides to use, and why insecticides are ineffective against weeds.
        </p>
        <br />
        <p className="text-green-800">
          Weeds are causing ₹92,000 crore ($11 billion) worth of loss in crop
          productivity each year, according to a study commissioned by the
          Federation of Seed Industry of India (FSII), carried out by experts
          N.T. Yaduraju, M.R. Hegde, and A.R. Sadananda. The collaborative study
          recommended deploying new, technology-led weed control strategies to
          address the menace. FSII in its report said, weeds are responsible for
          approximately 25-26% of yield losses in kharif crops and 18-25% in
          rabi across India.
        </p>
      </div>

      {/* Features Section */}
      <div className="m-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="w-full h-48">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center bg-[#123524]">
                <h1 className="font-semibold text-lg text-white">
                  {item.title}
                </h1>
                <p className="text-stone-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
