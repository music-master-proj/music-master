export const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
export const YOUTUBE_API_KEY ='AIzaSyCnp07dfg6mL_AuYOltm9fbebfQCjr6L3Q'//process.env.REACT_APP_YOUTUBE_API_V3_SECRET;

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
