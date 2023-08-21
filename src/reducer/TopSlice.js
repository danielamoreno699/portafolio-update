import projectsTop from '../helper/topproj';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    top: projectsTop
    };

    const topSlice = createSlice({
    name: 'top',
    initialState,
    reducers: {
        addTop: (state, action) => {
            state.top.push(action.payload)
        }
    }

    })

    
    export const { addTop } = topSlice.actions;
    export default topSlice.reducer;