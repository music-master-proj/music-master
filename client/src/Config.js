export const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
export const YOUTUBE_API_KEY = 'AIzaSyAsq9yg44F3lZSRseATzB5Ry-YjFjLf7lM'//process.env.REACT_APP_YOUTUBE_API_V3_SECRET;

export const APIHEADERS = () => {
  // let bearerToken = JSON.parse(localStorage.getItem('userProfile'))?.accessToken || '';
  return {
    headers: {
      'Accept': 'application/json',
      'Content-type': `application/json; charset=utf-8`,
      // 'Authorization': `Bearer ${bearerToken}` //the token is a variable which holds the token
    }
  }
}
