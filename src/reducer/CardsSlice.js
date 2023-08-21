import { createSlice } from '@reduxjs/toolkit';
import projectDetailList from '../helper/cards';
import Stacks from '../helper/stacks';
import paragraphsAbout from '../helper/aboutme';
import softSkills from '../helper/softSkills';
import prospect from '../helper/prospect';
import projectsTop from '../helper/topproj';

const initialState = {
    data: projectDetailList,  
    stack: Stacks,
    pAbout: paragraphsAbout,
    softSkills: softSkills, 
    prospect: prospect,
    top: projectsTop
  };

   const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.data.push(action.payload)
        },
        addStack: (state, action) => {
            state.stack.push(action.payload)
        },
        addTop: (state, action) => {
            state.top.push(action.payload)
        }
    }

  })

    export const { addCard, addStack } = cardsSlice.actions;
    export default cardsSlice.reducer;