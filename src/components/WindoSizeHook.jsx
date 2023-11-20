"use client"
import { useState, useEffect } from "react";

// A custom hook that returns the window size
function useWindowSize() {
    // Initialize state with the current window size
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    // A function that updates the state with the new window size
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    // Add an event listener for the resize event on mount
    useEffect(() => {
         // Only execute this code on the client-side
    if (typeof window !== "undefined") {
        // Add the event listener on mount
        window.addEventListener("resize", handleResize);
  
        // Call the handleResize function to set the initial window size
        handleResize();
  
        // Remove the event listener on cleanup
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []); // Empty dependency array

    // Return the current window size
    return windowSize;
}


export default useWindowSize;