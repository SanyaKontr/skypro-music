import {
    SET_CURRENT_TRACK,
    NEXT_TRACK,
    PREVIOUS_TRACK,
    MIX_TRACK,
    PLAY,
    PAUSE,
  } from "../actions/types/Todo";

  const initialState = {
    currentTrack: null,
    allIds: [],
    isPlaying: null,
    tracks: [],
    isMix: false,
  };

  export default function playerReducer(state = initialState, action) {
    switch (action.type) {

      case SET_CURRENT_TRACK: {
 

    const { track, playlist } = action.payload;

        return {
          ...state,
          currentTrack: track,
          tracks: playlist,
          isPlaying: true,
        };
      }

      case PLAY: {
        return {
          ...state,
          isPlaying: true,
        };
      }

      case PAUSE: {
        return {
          ...state,
          isPlaying: false,
        };
      }

      case NEXT_TRACK: {
        const playlist = state.isMix ? state.mixTracks : state.tracks;
        const currentTrackIndex = playlist.findIndex(
          (track) => track.id === state.currentTrack.id
        );
        let content = playlist[currentTrackIndex + 1];

        if (!content && state.isMix) {
            
          content = state.mixTracks[0];
        }

        if (!content) {
          return state;
        }

        return {
          ...state,
          currentTrack: content,
        };
      }

      case PREVIOUS_TRACK: {
        const playlist = state.isMix ? state.mixTracks : state.tracks;
        const currentTrackIndex = playlist.findIndex(
          (track) => track.id === state.currentTrack.id
        );
        let content = playlist[currentTrackIndex - 1];

        if (!content) {
          return state;
        }

        return {
          ...state,
          currentTrack: content,
        };
      }

      case MIX_TRACK: {
        return {
          ...state,
          isMix: !state.isMix,
          mixTracks: [...state.tracks].sort(() => 0.5 - Math.random()),
        };
      }

      default:
        return state;
    }
  }