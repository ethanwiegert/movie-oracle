'use client'


export default function Animation() {

  
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-40 font-[family-name:var(--font-geist-sans)]">
                
      <main className="flex flex-col gap-8 row-start-1 items-center">
       
      <h1>Spotify Unwrapped</h1>
      
      <h2>The Future is Now </h2>
        <div className="flex gap-4 items-center flex-column">

        <p><i>Discover what could be</i></p>
       
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

