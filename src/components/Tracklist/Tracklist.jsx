import * as Style from "./TracklistStyle.js";
import { convertSecToMinAndSec } from "../../helpers.js";
import PropTypes from "prop-types";


function Tracklist({ handleTrackPlay, tracks, getTracksError, loading }) {
  return (
    <Style.CenterblockContent>
      <Style.ContentTitle>
        <Style.PlaylistTitleColCol01>Трек</Style.PlaylistTitleColCol01>
        <Style.PlaylistTitleColCol02>ИСПОЛНИТЕЛЬ</Style.PlaylistTitleColCol02>
        <Style.PlaylistTitleColCol03>АЛЬБОМ</Style.PlaylistTitleColCol03>
        <Style.PlaylistTitleColCol04>
          <Style.PlaylistTitleSvg alt="time">
            <use xlinkHref="/icon/sprite.svg#icon-watch"></use>
          </Style.PlaylistTitleSvg>
        </Style.PlaylistTitleColCol04>
      </Style.ContentTitle>
      <p>{getTracksError}</p>
      <Style.ContentPlaylist>
        {loading ?
          ([1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (<Style.PlaylistItem>
            <Style.PlaylistTrack>
              <Style.TrackTitle>
                <Style.TrackTitleImage>
                  <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                </Style.TrackTitleImage>
                <div>
                  <Style.TrackTitleLink href="http://">
                    <img
                      src="/icon/track.svg"
                      alt="Название трека загружается"
                    />
                    <Style.TrackTitleSpan></Style.TrackTitleSpan>
                  </Style.TrackTitleLink>
                </div>
              </Style.TrackTitle>
              <Style.TrackAuthor>
                <Style.TrackAuthorLink href="http://">
                  <img
                    src="/icon/singer.svg"
                    alt="Имя исполнителя загружается"
                  />
                </Style.TrackAuthorLink>
              </Style.TrackAuthor>
              <Style.TrackAlbum>
                <Style.TrackAlbumLink href="http://">
                  <img
                    src="/icon/album.svg"
                    alt="Название альбома загружается"
                  />
                </Style.TrackAlbumLink>
              </Style.TrackAlbum>
            </Style.PlaylistTrack>
          </Style.PlaylistItem>))
          )
          : tracks.length > 0 && tracks.map((track) => (
            <Style.PlaylistItem key={track.id}>
              <Style.PlaylistTrack>
                <Style.TrackTitle>
                  <Style.TrackTitleImage>
                    <Style.TrackTitleSvg alt="music">
                      <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                      {track.logo}
                    </Style.TrackTitleSvg>
                  </Style.TrackTitleImage>
                  <div>
                    <Style.TrackTitleLink onClick={() => handleTrackPlay(track)}>
                      {track.name} <Style.TrackTitleSpan></Style.TrackTitleSpan>
                    </Style.TrackTitleLink>
                  </div>
                </Style.TrackTitle>
                <Style.TrackAuthor>
                  <Style.TrackAuthorLink href={track.track_file}>
                    {track.author}
                  </Style.TrackAuthorLink>
                </Style.TrackAuthor>
                <Style.TrackAlbum>
                  <Style.TrackAlbumLink href={track.track_file}>
                    {track.album}
                  </Style.TrackAlbumLink>
                </Style.TrackAlbum>
                <div>
                  <Style.TrackTimeSvg alt="time">
                    <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                  </Style.TrackTimeSvg>
                  <Style.TrackTimeText>
                    {convertSecToMinAndSec(track.duration_in_seconds)}
                  </Style.TrackTimeText>
                </div>
              </Style.PlaylistTrack>
            </Style.PlaylistItem>
          ))}

        {/*  {tracks.map((track) => (
          <Style.PlaylistItem key={track.id}>
            <Style.PlaylistTrack>
              <Style.TrackTitle>
                <Style.TrackTitleImage>
                  <Style.TrackTitleSvg alt="music">
                  <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                    {track.logo}
                  </Style.TrackTitleSvg>
                </Style.TrackTitleImage>
                <div>
                  <Style.TrackTitleLink onClick={() => handleTrackPlay(track)}>
                    {track.name} <Style.TrackTitleSpan></Style.TrackTitleSpan>
                  </Style.TrackTitleLink>
                </div>
              </Style.TrackTitle>
              <Style.TrackAuthor>
                <Style.TrackAuthorLink href={track.track_file}>
                  {track.author}
                </Style.TrackAuthorLink>
              </Style.TrackAuthor>
              <Style.TrackAlbum>
                <Style.TrackAlbumLink href={track.track_file}>
                  {track.album}
                </Style.TrackAlbumLink>
              </Style.TrackAlbum>
              <div>
                <Style.TrackTimeSvg alt="time">
                  <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                </Style.TrackTimeSvg>
                <Style.TrackTimeText>
                  {convertSecToMinAndSec(track.duration_in_seconds)}
                </Style.TrackTimeText>
              </div>
            </Style.PlaylistTrack>
          </Style.PlaylistItem>
        ))} */}
      </Style.ContentPlaylist>
    </Style.CenterblockContent>
  );
}


export default Tracklist;