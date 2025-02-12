'use client'
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import GenreChart from "@/components/ui/piechart"
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export default function Profile(){
  const [currentUser, setCurrentUser] = useState<string>();
  const [currentAvatar, setCurrentAvatar] = useState<string>();

      async function SpotifyTest(){
        const sdk = SpotifyApi.withUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, "http://localhost:3000/profile", ["user-read-private user-read-email user-top-read"]);
        const user = await sdk.currentUser.profile()

        const TopArtists = await sdk.currentUser.topItems("artists", "short_term", 50, 0);
        console.log(TopArtists);
        //to add: loop artists and get genres, hash map, add top five to pie chart with counts

        const name = user.display_name
        setCurrentUser(name)
        console.log(user.images)
        if(user.images.length>0){
          setCurrentAvatar(user.images[0].url)
        }
        else{
          setCurrentAvatar(" ")
        }

      }

     useEffect(()=>{
      SpotifyTest();
    })
    

    
    return (
    <>
<Navbar userAvatar={`${currentAvatar}`} userLoggedIn={`${currentUser}`}/>
<h1>Test Artist Data</h1>
<p>Welcome {currentUser}!</p>
<GenreChart/>
    </>
)
}