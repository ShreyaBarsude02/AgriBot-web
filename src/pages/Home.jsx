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
            
        <div className="grid grid-cols-3 space-x-28 space-y-9">
            <div className="flex flex-col bg-red-200 w-[20vw]">
                <div>photo</div>
                <div className="p-2 flex flex-col justify-center items-center">
                   <h1 className="font-semibold">AI-Powered Weed Detection Bot</h1> 
                    <p>Find crop-specific weeds</p>
                </div>
            </div>
            <div className="flex flex-col bg-red-200 w-[20vw]">
                <div>photo</div>
                <div className="p-2 flex flex-col justify-center items-center">
                   <h1 className="font-semibold">Herbicide Guide</h1> 
                    <p>Get herbicide recommendations</p>
                </div>
            </div>
            <div className="flex flex-col bg-red-200 w-[20vw]">
                <div>photo</div>
                <div className="p-2 flex flex-col justify-center items-center">
                   <h1 className="font-semibold">Government Updates</h1> 
                    <p>Stay informed on guidelines</p>
                </div>
            </div>
            <div className="flex flex-col bg-red-200 w-[20vw]">
                <div>photo</div>
                <div className="p-2 flex flex-col justify-center items-center">
                   <h1 className="font-semibold">Specific Farm Monitoring</h1> 
                    <p>Monitor your farm</p>
                </div>
            </div>
            <div className="flex flex-col bg-red-200 w-[20vw]">
                <div>photo</div>
                <div className="p-2 flex flex-col justify-center items-center">
                   <h1 className="font-semibold">Farmer Community</h1> 
                    <p>Connect & share knowledge</p>
                </div>
            </div>
            <div className="flex flex-col bg-red-200 w-[20vw]">
                <div>photo</div>
                <div className="p-2 flex flex-col justify-center items-center">
                   <h1 className="font-semibold">Weed identification</h1> 
                    <p>Find crop-specific weeds</p>
                </div>
            </div>
        </div>
        </div>
        
        
      </div>
    </>
  );
}

export default Home;
