import axios from 'axios';
import {LOGIN , GET} from './types'

export const login = (username,password) => async dispatch => {
    const res = await axios.post('http://localhost:8000/api-token-auth/',{username : username,password : password})
    console.log('i am here',res)
    if(res.data){
        // window.history.push('/Dashboard')
    dispatch ({
        type : LOGIN,
        payload : res.data.token
    });
}
else{
    console.log('bad request')
}
};

export const get = (token) => async dispatch => {
    const res = await axios.get('http://localhost:8000/hello/',{headers : {'Authorization': `Token ${token}`}})
    console.log('i am here',res)
    dispatch ({
        type : GET,
        payload : res.data
    });
};

