'use client'

import { useSpotify } from '@/api/useSpotify';
import { SearchResults, SpotifyApi, AuthorizationCodeWithPKCEStrategy } from '@spotify/web-api-ts-sdk';
import { useEffect, useState } from 'react'


function App() {
  
  const sdk = useSpotify(
    `${process.env.NEXT_PUBLIC_Spotify_Client}`, 
    "http://localhost:3000", 
    ["user-read-private", "user-read-email", "user-top-read", "user-follow-read", "user-library-read"]
  );

  return sdk
    ? (<SpotifySearch sdk={sdk} />) 
    : (<></>);
}

function SpotifySearch({ sdk }: { sdk: SpotifyApi}) {
  const [results, setResults] = useState<SearchResults<["artist"]>>({} as SearchResults<["artist"]>);
  const [authorized, setAuthorized] = useState(false);
  let sdk: SpotifyApi

  function Authorize(){
     sdk = SpotifyApi.withUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, 
      "http://localhost:3000", 
      ["user-read-private", "user-read-email", "user-top-read"]);
  }
  useEffect(() => {
    (async () => {
      const results = await sdk.search("The Beatles", ["artist"]);
      setResults(() => results);


      const sdk2 = SpotifyApi.withUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, 
    "http://localhost:3000", 
    ["user-read-private", "user-read-email", "user-top-read"]);

      
      const user = await sdk.currentUser.profile();
      console.log(user)

      const data = sdk2.currentUser.topItems("artists", "short_term", 50, 1)
      console.log(data)

    

    })();
  }, [sdk]);

  // generate a table for the results
  const tableRows = results.artists?.items.map((artist) => {

    return (
      <tr key={artist.id}>
        <td>{artist.name}</td>
        <td>{artist.popularity}</td>
        <td>{artist.followers.total}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Spotify Search for The Beatles</h1>
      <button onClick={Authorize}>Authorize</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Popularity</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </>
  )
}

export default App;