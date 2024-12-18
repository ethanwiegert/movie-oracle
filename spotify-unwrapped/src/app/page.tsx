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
        <h2><i>Open up to your future</i></h2>
       
        </div>
        <div className="flex flex-row pt-16">
            <div id="animation">
            {displayNote ? 
            <svg id="display-note" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce h-24 w-24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
            </svg>
            : 
            <div id = "box-open" className="bg-black h-24 w-24 home-box home-box-open"></div>}
            </div>
        </div>
      </main>
      <footer className="row-start-3 items-center justify-center absolute bottom-0 m-4">
        
    
          <p>Spotify Unwrapped - Ethan Wiegert</p>
      </footer>
    </div>
  );
  }

