import PropTypes from 'prop-types'
import DefaultPic from './assets/profile.jpg'

const Musics = (props) => {

  const musics = props.songs
  const artistLabel = props.artist
  const imgSource = props.imgSrc;


  const renderSongs = musics.map(music => (
                                        <div key={music.id}>{music.song}:&nbsp;
                                                 <b>{music.rate}</b></div>
                                        ))

  return(
    <div className='container'>
    <h3 className='artist-label'>{artistLabel}</h3>
    <h1 className='label'>Top Songs </h1>
      <div className='content-container'>
        <div className='song-listed'>{renderSongs}</div>
        <div><img className='artist-photo' src={imgSource} alt={artistLabel} /></div>
      </div>
    </div>
    )
}

Musics.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            song: PropTypes.string,
                                            rate: PropTypes.number,
                                          })),
  artist: PropTypes.string,
  imgSrc: PropTypes.string,
  songs: PropTypes.string,
}

Musics.defaultProps = {
  artist: "Artist Name",
  imgSrc: DefaultPic,
  songs: [],
}

export default Musics