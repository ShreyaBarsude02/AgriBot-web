import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <div className="bg-stone-50 pt-[10vh] ">
        <div className="h-[30vh] flex flex-col justify-center items-center  bg-amber-100">
          <h1 className="font-black text-3xl pb-3">
            Empowering Indian Farmers with Smart Weed Management{" "}
          </h1>

          <p className="text-green-600 font-bold h-[0.5vh] tracking-wide italic text-xl">
            <Typewriter
              words={["Throw Away Weeds, Protect Our Fields"]}
              loop={0}
              cursor={false}
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </p>
        </div>
        <div className="m-9 bg-amber-50  p-9 text-justify rounded-2xl">
          <p>
            India’s farmers face significant challenges in managing weeds, which
            reduce crop yields and increase labor costs. Many farmers lack
            accurate information on which weeds affect their crops, the right
            herbicides to use, and why insecticides are ineffective against
            weeds.
          </p>
          <br />
          <p>
            Weeds are causing ₹92000 crore ($11 billion) worth loss in crop
            productivity each year, according to a study commissioned by the
            Federation of Seed Industry of India (FSII), carried out by experts
            N.T. Yaduraju, M.R. Hegde and A.R. Sadananda. The collaborative
            study recommended deployment of new, technology-led weed control
            strategies to address the menace. FSII in its report said, weeds are
            responsible for approximately 25-26% of yield losses in kharif crops
            and 18-25% in rabi across the India.
          </p>
        </div>
        <div className=" m-9 bg-pink-50 flex justify-center ">
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { img: "img1.jpg", title: "AI-Powered Weed Detection Bot", desc: "Find crop-specific weeds" },
    { img: "weedicide.jpg", title: "Herbicide Guide", desc: "Get herbicide recommendations" },
    { img: "update.png", title: "Government Updates", desc: "Stay informed on guidelines" },
    { img: "monitoring.png", title: "Specific Farm Monitoring", desc: "Monitor your farm" },
    { img: "farm-comm.png", title: "Farmer Community", desc: "Connect & share knowledge" },
    { img: "weed-recomend.jpg", title: "Weed Identification", desc: "Find crop-specific weeds" }
  ].map((item, index) => (
    <div key={index} className="flex flex-col bg-green-100 rounded-lg shadow-md overflow-hidden border border-green-300">
      <div className="w-full h-48">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-center" style={{ backgroundColor: "hsl(88, 100%, 82%)" }}>
        <h1 className="font-semibold text-lg text-green-900">{item.title}</h1>
        <p className="text-green-800">{item.desc}</p>
      </div>
    </div>
  ))}
</div>


        </div>
        
        
      </div>
    </>
  );
}

export default Home;
