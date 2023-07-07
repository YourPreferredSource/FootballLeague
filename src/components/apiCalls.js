// import { logout } from "./Security/securityReducer";

const url = process.env.REACT_APP_API;

const urlForLogin = url + 'login';


export const login = async (submit) => {
    const dataform = new FormData(submit)
    const response = await fetch(urlForLogin, {
      method: 'POST',
      body: dataform
    })
    if (response.status >= 400) {
      sessionStorage.setItem('loggedIn', 'failed');
      throw (new Error('Network request failed'))
    };
    return await response.json()
  }