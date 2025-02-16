'use client'

import { useSpotify } from '@/api/useSpotify';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { useEffect, useState } from 'react'

function App() {
  
  const sdk = useSpotify(
    `${process.env.NEXT_PUBLIC_Spotify_Client}`, 
    "http://localhost:3000/profile", 
    ["user-read-private", "user-read-email", "user-top-read", "user-follow-read"]
  );

  return sdk
    ? (<SpotifySearch sdk={sdk} />) 
    : (<></>);
}

function SpotifySearch({ sdk }: { sdk: SpotifyApi}) {
  const [results, setResults] = useState<SearchResults<["artist"]>>({} as SearchResults<["artist"]>);

  useEffect(() => {
    (async () => {
      const results = await sdk.search("The Beatles", ["artist"]);
      setResults(() => results);

      const user = await sdk.currentUser.profile();
      console.log(user)

      const followed = await sdk.currentUser.followedArtists()
      console.log(followed)
    
      const TopArtists =  await sdk.currentUser.topItems("artists", "short_term", 50, 0)
      console.log(TopArtists)      
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