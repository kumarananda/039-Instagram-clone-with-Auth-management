

// create reducer
const AuthReduser = (authstate, {type, payload}) => {

    switch (type) {
        case 'LOGIN_USER_SUCCESS':
            return {
                isUserLogin : true,
                user : payload,
            }
        case 'USER_LOGOUT':
            return {
                isUserLogin : false,
                user : {}
            }
            // break;
    
        default:
            return authstate;
            // break;
    }
}

// export Reduser
export default AuthReduser