'use client'
import { useEffect, useState } from "react";
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export default function Profile(){
  const [currentUser, setCurrentUser] = useState();
  

      async function SpotifyTest(){
        //console.log("test- "+process.env.NEXT_PUBLIC_TestVariable)
        const sdk = SpotifyApi.withUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, "http://localhost:3000/profile", [""]);
        console.log("Searching Spotify for The Beatles...");
        const user = await sdk.currentUser.profile()
        const name = user.display_name
        console.log("user - "+user.display_name)
        const api = SpotifyApi.withClientCredentials(
            `${process.env.NEXT_PUBLIC_Spotify_Client}`,
            `${process.env.NEXT_PUBLIC_Client_Secret}`
        );
    
        const items = await api.search("The Beatles", ["artist"]);
    
        console.table(items.artists.items.map((item) => ({
            name: item.name,
            followers: item.followers.total,
            popularity: item.popularity,
        })));
        setCurrentUser(name)
      }

     useEffect(()=>{
      SpotifyTest();
    })
    

    
    return (
    <>
<h1>Test Artist Data</h1>
<p>name: {currentUser}</p>
    </>
)
}