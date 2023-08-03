import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './combine-reducers';

const store = configureStore({
    reducer: {
        rootReducer: rootReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
