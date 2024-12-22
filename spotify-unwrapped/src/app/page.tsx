'use client'
import { useEffect, useState } from "react";


export default function Animation() {
  const [displayNote, setDisplayNote] = useState(false)


    useEffect(()=>{
        setTimeout(() => {
            DisplayNote()
        }, 2500);
    })

  
  function DisplayNote(){
    setDisplayNote(true)
  }
  
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-40 font-[family-name:var(--font-geist-sans)]">
                
      <main className="flex flex-col gap-8 row-start-1 items-center">
       
      <h1>Spotify Unwrapped</h1>
      

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <h2><i>The Future is Now</i></h2>
       
        </div>
        <div className="flex flex-row pt-16">
                <div className="text-center border-r-4 border-l-4 home-portal h-32 w-32 home-box">
                </div>

        </div>
      </main>
      <footer className="flex bg-gray-700 bg-gradient-to-b from-white row-start-3 items-center justify-center absolute bottom-0 m-4 p-8 w-screen">
        
    <div><p>Spotify Unwrapped - Ethan Wiegert</p></div>
          
      </footer>
    </div>
  );
  }

