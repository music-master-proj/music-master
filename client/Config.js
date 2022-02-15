export const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_V3_SECRET;

export const APIHEADERS = () => {
  // const bearerToken = useSelector((state) => state.auth.authData.accessToken || state.auth.authData),
  // let bearerToken = localStorage.getItem('loginToken');
  return {
    headers: {
      'Accept': 'application/json',
      'Content-type': `application/json; charset=utf-8`,
      // 'Authorization': `Bearer ${bearerToken}` //the token is a variable which holds the token
    }
  }
}
