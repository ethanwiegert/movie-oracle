'use client'
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export default function Profile(){
  const [currentUser, setCurrentUser] = useState<string>();
  const [currentAvatar, setCurrentAvatar] = useState<string>();

      async function SpotifyTest(){
        const sdk = SpotifyApi.withUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, "http://localhost:3000/profile", ["user-read-private user-read-email"]);
        const user = await sdk.currentUser.profile()
        const name = user.display_name
        /*const api = SpotifyApi.withClientCredentials(
            `${process.env.NEXT_PUBLIC_Spotify_Client}`,
            `${process.env.NEXT_PUBLIC_Client_Secret}`
        );
    
       const items = await api.search("The Beatles", ["artist"]);
    
        console.table(items.artists.items.map((item) => ({
            name: item.name,
            followers: item.followers.total,
            popularity: item.popularity,
        })));*/
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
    </>
)
}