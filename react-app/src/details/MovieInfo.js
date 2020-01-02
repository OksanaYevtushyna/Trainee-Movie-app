import React from 'react';


const MovieInfo = (props) => {
    return (
        <div className='container'>
            <div className='info'>
                <button onClick={props.closeMovieInfo}>Go back</button>

            </div>
        </div>
    )
}


export default MovieInfo;