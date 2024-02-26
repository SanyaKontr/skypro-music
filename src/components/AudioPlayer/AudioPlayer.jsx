import * as S from "./AudioPlayerStyle.js";
import { useEffect, useRef, useState } from "react";
import { convertSecToMinAndSec } from "../../helpers.js";
import {
  nextTrack,
  previousTrack,
  mixTracks,
  play,
  pause,
} from "../../Store/Actions/Creators/Todo.js";
import { useDispatch, useSelector } from "react-redux";
import { isNextTrack } from "../../Store/selectors/todo.js";
import { setNext, setPause, setPlay, setPrev } from "../../Store/trackSlice.js";

function AudioPlayer({ track }) {
const {isPlaying, isShuffled} = useSelector(state=> state.player)
  //const [isPlaying, setIsPlaying] = useState(false); 
  const [isMix, setIsMix] = useState(false);
    const isNext = useSelector(isNextTrack);
  const [isLooped, setIsLooped] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch();

  const handleMix = () => {
    if (!isMix) {
      setIsMix(true);
      dispatch(mixTracks(true));
    } else {
      setIsMix(false);
      dispatch(mixTracks(false));
    }
  };

  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    dispatch(setPlay());
  };

  const handleStop = () => {
    audioRef.current.pause();
    dispatch(setPause());
  };

  const togglePlay = isPlaying ? handleStop : handleStart;
  const handleNextTrack = () => {
    dispatch(setNext());
  };

  const handlePreviousTrack = () => {
    if (audioRef.current && currentTime > 5) {
      audioRef.current.currentTime = 0;

      return;
    }
    dispatch(setPrev());
  };

  const duration = audioRef.current?.duration || 0;
  const progressPercent = (currentTime / duration) * 100 || 0;

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);

    const clampedVolume = Math.max(0, Math.min(1, newVolume));

    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  };


  useEffect(() => {
    audioRef.current.load();
  }, [track]);

  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);
    }

    const handleTrackEnd = () => {
      console.log(!isNext, !isLooped);
      if (!isNext && !isLooped) {
        console.log("Pause");
        dispatch(setPause())
        return
      } 
      console.log("qjwerhnrq");
      !isLooped && dispatch(setNext());
      isLooped && setCurrentTime(0);
      isLooped && handleStart();
   
    };

    if (audioRef.current) {
      audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
      audioRef.current.removeEventListener("ended", handleTrackEnd);
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);
      audioRef.current.addEventListener("ended", handleTrackEnd);
    }

    updateCurrentTime(); 

    return () => {

      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleTrackEnd);
      }
    };
  }, [audioRef, isLooped]);



  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const percentClicked = (clickPosition / progressBar.offsetWidth) * 100;
    const newTime = (percentClicked / 100) * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };
  console.log(isPlaying);
  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsLooped(true);
  };

  const handleUnloop = () => {
    audioRef.current.loop = false;
    setIsLooped(false);
  };
  const toggleLoop = isLooped ? handleUnloop : handleLoop;
  return (
  <>
      <S.StandartAudioPlayer controls ref={audioRef} onLoadedMetadata={handleStart}>
        <source src={track.track_file} type="audio/mpeg" />
      </S.StandartAudioPlayer>
      <S.Bar>
        <S.BarContent>
          <S.TrackTime>
            {convertSecToMinAndSec(currentTime) +
              " " +
              "/" +
              " " +
              convertSecToMinAndSec(duration)}
          </S.TrackTime>
          <S.BarPlayerProgress onClick={handleProgressBarClick}>
            <S.BarPlayerProgressLoad
              style={{ width: `${progressPercent}%` }}
            ></S.BarPlayerProgressLoad>
          </S.BarPlayerProgress>

          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
              <S.PlayerBtnPrev onClick={() => handlePreviousTrack()}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay>
                  <S.PlayerBtnPlaySvg alt="play" onClick={togglePlay}>
                    {isPlaying ?(
                      <use xlinkHref="/icon/sprite-2.svg#icon-pause"></use>
                    ) : (
                      <use xlinkHref="/icon/sprite.svg#icon-play"></use>
                    )}
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={() => handleNextTrack()}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg
                    alt="repeat"
                    onClick={toggleLoop}
                    $isLooped={isLooped}
                  >
                    <use xlinkHref="/icon/sprite.svg#icon-repeat"></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg
                    alt="shuffle"
                    onClick={() => handleMix()}
                    $isMix={isMix}
                  >
                    <use xlinkHref="/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                      {track.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {track.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.VolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={(e) => handleVolumeChange(e)}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.VolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}

export default AudioPlayer;