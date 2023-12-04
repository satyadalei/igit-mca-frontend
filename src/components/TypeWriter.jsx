"use client";
import moment from "moment-timezone";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroTypeWriting = () => {
  const [isWishDone, setIsWishDone] = useState(false);

  const handleWishDone = () => {
    setIsWishDone(true);
  };

  const handleType = (count) => {
    console.log(count);
  };

  const timeInHour = new Date(moment().tz("Asia/Kolkata").format()).getHours();

  let finalWishArray;
  if (timeInHour >= 0 && timeInHour < 12) {
    finalWishArray = [
      "Good Morning!",
      "What's the plan to code today?",
      "Is it C or C++ or Java",
      "or Python or Web Dev or DSA?",
      "What ever it is,",
      "code like you are champ in that!",
      "Have a great day!",
    ];
  }
  if (timeInHour >= 12 && timeInHour <= 17) {
    finalWishArray = [
      "Good Afternoon!",
      "How is it going?",
      "Tired of code? Take a break!",
    ];
  }

  if (timeInHour > 17) {
    finalWishArray = [
      "Good Evening!",
      "How is it going?",
      "Tired of code? Take a break!",
    ];
  }
  const totalMilliSeconds = (finalWishArray.toLocaleString().length*(50+80)) + ((finalWishArray.length)*1500) + 3000;
  // finalWishArray.map((word)=>{
    // })
  // console.log("totalMilliSeconds " , totalMilliSeconds);
  setTimeout(()=>{
    setIsWishDone(true);
  }, totalMilliSeconds)
    
  return (
    <>
      <div className=" mb-3 mt-3 text-lg h-12">
        <h1>
          Hi there!{" "}
          <span className="text-sky-500 font-semi-bold">
            {
              <Typewriter
                cursorBlinking={true}
                words={finalWishArray}
                // cursor={true}
                loop={false}
                onLoopDone={handleWishDone}
              />
            }
          </span>
        </h1>
      </div>
    </>
  );
};
export default HeroTypeWriting;
