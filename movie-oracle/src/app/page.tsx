'use client'
import { Navbar } from "@/components/Navbar";
import Cube from "@/components/ui/cube";
import TextCascade from "@/components/ui/text-cascade";

export default function Animation() {

  
  return (
    <>
    <Navbar userAvatar={""} userLoggedIn={""}/>
    <TextCascade>
    <div id="body"className="content-center mt-16 pt-16 font-[family-name:var(--font-geist-sans)]">
         
      <main className="flex flex-col gap-6 row-start-1 items-center">
      <h1>Movie Oracle</h1>
      
      <h2>Striving for the <b>best</b> movie recommendations</h2>
  
   
        <div id="body" className="flex flex-row items-center flex-col">
        <p className="col-span-2"><i>Helping you find movie magic</i></p>
        <p className="col-span-2"><i><u>hopefully, outside the <b>box</b></u></i></p>
        </div>
        <br/>
        <Cube />

        
      </main>

      <footer className="flex bg-gray-700 bg-gradient-to-b from-white fixed items-center justify-center absolute bottom-0 p-4 w-screen">
        
    <div><p>Movie Oracle - Ethan Wiegert</p></div>
          
      </footer>
    </div>
    </TextCascade>
    </>
  );
  }

