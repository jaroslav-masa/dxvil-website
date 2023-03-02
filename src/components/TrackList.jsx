import React from 'react'
import spotifyAPI from '../utils/spotifyAPIRequest'


const TrackList = () => {
    useEffect(() => {
        spotifyAPI.then(data => {
            
        })
    })
    return (
        <div>TrackList</div>
    )
}

export default TrackList