import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './CardsSlice';
import topReducer from './TopSlice';

const store = configureStore({
    reducer:{
        cards: cardsReducer,
        top: topReducer
    }

})

export default store;