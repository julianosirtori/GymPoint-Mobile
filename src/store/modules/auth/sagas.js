import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
    try {
        const { idStudent } = payload;
        console.tron.log(idStudent);
        const response = yield call(api.get, `/students/${idStudent}`);
        const student = response.data;
        yield put(signInSuccess(student));

        // history.push('/dashboard');
    } catch (err) {
        yield put(signFailure());
        Alert.alert(
            'Falha na autenticação',
            'Houve um erro no login, verefique seus dados'
        );
    }
}

export function signOut() {
    // history.push('/');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
