import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';

export const onLogin = (user) => {
   return(dispatch) => { // dispatch itu sebuah function yang bertugas untuk mengirim action ke reducers
        axios.get(API_URL_1 + '/users', {
            params: {
                email: user.email,
                password: user.password
            }
        }).then(user => {
            dispatch ({ // keunggulan fungsi dispatch dibanding return itu bisa kirim action lbh dari 1 kali, kalo return abis kirim action, dia lgsng keluar dari function
                type: "USER_LOGIN_SUCCESS",
                payload: { username: user.data[0].username, email: user.data[0].email, error: "" }
            });
        }).catch(err => {
            console.log(err);
            dispatch ({
                type: "USER_LOGIN_FAIL"
            });
        })
    }
};

export const onLogout = () => {
    return {
        type: "USER_LOGOUT"
    };
}

export const onRegister = (user) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/users', user) // karena object yg mau dikirim sama dgn yg diterima di Registerpage, gausah dijabarin satu2 propertinya
        .then((res) => {
            console.log(res);
            dispatch ({ 
                type: "USER_LOGIN_SUCCESS",
                payload: { username: res.data.username, email: res.data.email, error: "" }
            });
        })
        .then((err) => {
            console.log(err);
        })     
    }
}

export const keepLogin = (email) => {
    return(dispatch) => { // dispatch itu sebuah function yang bertugas untuk mengirim action ke reducers
         axios.get(API_URL_1 + '/users', {
             params: {
                 email: email,
             }
         }).then(user => {
             dispatch ({ // keunggulan fungsi dispatch dibanding return itu bisa kirim action lbh dari 1 kali, kalo return abis kirim action, dia lgsng keluar dari function
                 type: "USER_LOGIN_SUCCESS",
                 payload: { username: user.data[0].username, email: user.data[0].email, error: "" }
             });
         }).catch(err => {
             console.log(err);
             dispatch ({
                 type: "USER_LOGIN_FAIL"
             });
         })
     }
 };