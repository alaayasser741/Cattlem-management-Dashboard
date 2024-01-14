import {
    createSlice
} from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layoutAside',
    initialState: {
        isAsideOpen: false,
    },
    reducers: {
        toggleAside: (state) => {
            state.isAsideOpen = !state.isAsideOpen;
        },
    },
});

export const {
    toggleAside
} = layoutSlice.actions;

export default layoutSlice.reducer;