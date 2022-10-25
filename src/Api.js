import axios from "axios";

export const authEndpoint = "https://accounts.spotify.com/authorize";
export const spotifyEndpoint = "https://api.spotify.com/";


export const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
export const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT;

export const scopes = [
    "user-read-email",
    "user-top-read",
    "user-read-recently-played",
];
export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;


export const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});

export async function getRequest(token, path){
    const endpoint = spotifyEndpoint + path;
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    };
    const response = await axios.get(endpoint, config);
    return response.data;
}

