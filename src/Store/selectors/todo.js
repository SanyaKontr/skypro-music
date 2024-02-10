export const playerSelector = (store) => store.player;
export const isNextTrack = (state) => {
   const playlist = state.isMix ? state.mixTracks : state.player.tracks;
   const currentTrackIndex = playlist.findIndex(
    (track) => track.id === state.player.currentTrack.id
);
let content = playlist[currentTrackIndex + 1];
if (content) {
   return true;
} else {
    return false;
}
} 



