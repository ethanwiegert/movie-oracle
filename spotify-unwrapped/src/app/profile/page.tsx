'use client'
import { useEffect } from "react";
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export default function Profile(){

    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization


    async function GetAuthorization(){
      const ClientID =  process.env.Spotify_Client
      if(ClientID!=null){
        const sdk = SpotifyApi.withUserAuthorization(ClientID.toString(), "https://localhost:3000", ["user-read-recently-played"]);
        return sdk
      }
      
    }

    async function GetUser(){
      const sdk = await GetAuthorization();
      if(sdk != null){
        const user = await sdk.currentUser.profile()
        return user
      }
    }

    useEffect(()=>{
      const user = GetUser();
      console.log(user)
    })
    

    
    return (
    <>
<h1>Test Artist Data</h1>
map()
    </>
)
}