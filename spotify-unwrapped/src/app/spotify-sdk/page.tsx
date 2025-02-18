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

  useEffect(() => {
    (async () => {
      const results = await sdk.search("The Beatles", ["artist"]);
      setResults(() => results);


      const sdk2 = SpotifyApi.withUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, 
    "http://localhost:3000", 
    ["user-read-private", "user-read-email", "user-top-read"]);
    const specialSdk = SpotifyApi.performUserAuthorization(`${process.env.NEXT_PUBLIC_Spotify_Client}`, 
    "http://localhost:3000", 
    ["user-read-private", "user-read-email", "user-top-read"], "http://localhost:3000")
      const user2 = await sdk2.currentUser.profile()
      
      const user = await sdk.currentUser.profile();
      console.log(user)

      const artistData = await sdk2.artists.topTracks("0TnOYISbd1XYRBk9myaseg", "US")
      console.log(artistData)

    
      const token = (await specialSdk).accessToken
      const anotherSdk = new SpotifyApi({token});
      //console.log(TopArtists)      
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