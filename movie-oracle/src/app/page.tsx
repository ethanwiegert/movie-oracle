'use client'
import { Navbar } from "@/components/Navbar";
import Cube from "@/components/ui/cube";

export default function Animation() {

  
  return (
    <>
    <Navbar userAvatar={""} userLoggedIn={""}/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center mt-40 pt-40 font-[family-name:var(--font-geist-sans)]">
                
      <main className="flex flex-col gap-6 row-start-1 items-center">
       
      <h1>Movie Oracle</h1>
      
      <h2>Striving for the <b>best</b> movie recommendations</h2>
        <div className="flex flex-row items-center flex-col">
        <p className="col-span-2"><i>Helping you find movie magic</i></p>
        <p className="col-span-2"><i><u>hopefully, outside the <b>box</b></u></i></p>
        </div>
        <br/>
        <Cube />

        
      </main>
      <footer className="flex bg-gray-700 bg-gradient-to-b from-white row-start-3 items-center justify-center absolute bottom-0 m-0 p-4 w-screen">
        
    <div><p>Movie Oracle - Ethan Wiegert</p></div>
          
      </footer>
    </div>
    </>
  );
  }

