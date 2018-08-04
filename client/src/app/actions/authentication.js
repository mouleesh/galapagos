import { checkHttpStatus, parseJSON } from '../utils';
import {history} from '../routers/AppRouter';
import axios from 'axios';

export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    };
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
}

export const login = (response) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      token: response.headers["x-auth"],
      username: response.name
    }
  };
}

export function loginUser(email, password, redirect="/app") {
    return function(dispatch) {

        // return fetch('/api/users/login', {
        //     method: 'post',
        //     credentials: 'include',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //         body: JSON.stringify({email: email, password: password})
        //     })
        //     .then(checkHttpStatus)
        //     // .then(parseJSON)
        //     .then(response => {
        //         try {
        //           console.log(response.headers);
        //             // dispatch(login(response));
        //             // dispatch(pushState(null, redirect));
        //         } catch (e) {
        //             // dispatch(loginUserFailure({
        //             //     response: {
        //             //         status: 403,
        //             //         statusText: 'Invalid token'
        //             //     }
        //             // }));
        //         }
        //     })
        //     .catch(error => {
        //       console.log(error);
        //         // dispatch(loginUserFailure(error));
        //     })
        return axios.post('api/users/login', {
          email: email,
          password: password
        })
        .then(checkHttpStatus)
        .then(response => {
          dispatch(login(response));
          history.push('/home');
        }).catch(error => {
          console.log(error);
        })
    }
}
