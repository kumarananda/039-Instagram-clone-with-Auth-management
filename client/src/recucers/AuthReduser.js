

// create reducer
const AuthReduser = (authstate, {type, payload}) => {

    switch (type) {
        case 'LOGIN_USER':
            return {
                token : payload.token,
                user : payload.user
            }
        case 'USER_LOGOUT':
            return {
                token : null,
                user : null
            }
            // break;
    
        default:
            return authstate;
            // break;
    }
}

// export Reduser
export default AuthReduser