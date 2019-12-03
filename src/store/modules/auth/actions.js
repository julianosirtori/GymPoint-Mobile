export function signInRequest(idUser) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { idUser },
    };
}

export function signInSuccess(idUser) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { idUser },
    };
}
