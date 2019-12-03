export function signIn(useId) {
    return {
        type: '@auth/SIGN',
        payload: { useId },
    };
}
