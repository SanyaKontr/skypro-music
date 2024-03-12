import {
    createSlice
} from "@reduxjs/toolkit";
import {
    element
} from "prop-types";

const initialState = {
    currentTrack: null,
    isPlaying: false,
    currentPlaylist: [],
    tracks: [],
    isShuffle: false,
}

export const trackSlice = createSlice({
    name: "trackSlice",
    initialState,
    reducers: {
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload;
            state.isPlaying = true;
        },
        setPlay: (state) => {
            state.isPlaying = true;
        },
        setPause: (state) => {
            state.isPlaying = false;
        },
        setCurrentPlaylist: (state, action) => {
            state.currentPlaylist = action.payload;
        },
        setNext: (state) => {
            const currentIndex = state.currentPlaylist.findIndex(element => element.id === state.currentTrack.id);
            if (currentIndex === state.currentPlaylist.length - 1) return;
            state.currentTrack = state.currentPlaylist[currentIndex + 1];
        },
        setPrev: (state) => {
            const currentIndex = state.currentPlaylist.findIndex(element => element.id === state.currentTrack.id);
            if (currentIndex === 0) return;
            state.currentTrack = state.currentPlaylist[currentIndex - 1];
        },
        setShuffle: (state) => {
            state.isShuffle = true;
        },
    }
})
export const {
    setCurrentTrack,
    setPlay,
    setPause,
    setCurrentPlaylist,
    setPrev,
    setNext,
    setShuffle,
} = trackSlice.actions;
export const trackReducer = trackSlice.reducer;