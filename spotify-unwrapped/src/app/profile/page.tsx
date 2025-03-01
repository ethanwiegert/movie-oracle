'use client'
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import GenreChart from "@/components/ui/piechart"
import { AccessToken, SpotifyApi } from '@spotify/web-api-ts-sdk';

export default function Profile(){
  const [currentUser, setCurrentUser] = useState<string>();
  const [currentAvatar, setCurrentAvatar] = useState<string>();

  const[authorized, setAuthorized] = useState<boolean>(false);


  let sdk : SpotifyApi
  
  function Authorize(){
    sdk = SpotifyApi.withUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, "https://localhost:3000/profile", ["user-top-read"])
    const accessToken = sdk.getAccessToken();

     setAuthorized(true)
     SpotifyProfile(sdk);
     SpotifyTopItems(accessToken);

 }

      async function SpotifyProfile(spotifyClient: SpotifyApi){
        const user = await spotifyClient.currentUser.profile()

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
    async function SpotifyTopItems(accessToken){
      const newSdk = SpotifyApi.withAccessToken(`${process.env.NEXT_PUBLIC_Spotify_Client}`, accessToken);
      const topItems = newSdk.currentUser.topItems("artists", "long_term", 50, 0);
      console.log(topItems)
    }

     useEffect(()=>{
      //SpotifyTest();
    })
    

    
    return (
    <>
<Navbar userAvatar={`${currentAvatar}`} userLoggedIn={`${currentUser}`}/>
{authorized ? <><h1>Test Artist Data</h1>
  <p>Welcome {currentUser}!</p></> :
  <> <button onClick={Authorize}>Authenticate</button>
</>}
<GenreChart/>
    </>
)
}