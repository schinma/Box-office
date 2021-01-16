const API_BASE_URL = "https://www.googleapis.com";
const API_KEY = "AIzaSyCjXeTkWHBuciqAqWjPPXwlhUzlxRG-Dxo";

export async function apiGET(queryString) {
    
    const result =  await fetch(`${API_BASE_URL}${queryString}&key=${API_KEY}&maxResults=40`).then(response => response.json())
    console.log(result);
    return result;
}