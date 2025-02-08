import Encoder from "./encoder";

export default async function AuthenticateUser(){

const clientId = process.env.Spotify_Client;
const redirectUri = 'http://localhost:3000';

const scope = 'user-read-private user-read-email user-read-recently-played';
const authUrl = new URL("https://accounts.spotify.com/authorize")

const codeVerifier = Encoder()

// generated in the previous step
const codeChallenge = window.localStorage.setItem('code_verifier', (await codeVerifier).toString());

if(clientId!= null){
    const params =  {
        response_type: 'code',
        client_id: clientId?.toString(),
        scope,
        code_challenge_method: 'S256',
        code_challenge: (await codeChallenge).toString(),
        redirect_uri: redirectUri,
      }
      
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
      
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const getToken = async code=> {

        // stored in the previous step
        const codeVerifier = localStorage.getItem('code_verifier');;
      
        const payload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            client_id: clientId,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
          }),
        }
      
        const body = await fetch(url, payload);
        const response =await body.json();
      
        localStorage.setItem('access_token', response.access_token);
      }
}

}