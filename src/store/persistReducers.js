import AsynctStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'gympoint',
            storage: AsynctStorage,
            whitelist: ['auth'],
        },
        reducers
    );

    return persistedReducer;
};
