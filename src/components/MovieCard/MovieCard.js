import React from 'react'
import "./MovieCard.scss";
const MovieCard = (props) => {
    console.log(props.data);
    return (
        <div className='card-item'>
            <div className='card-inner'>
                <div className="card-top">
                    <img src={props.data.Poster} alt='movies_poster' />
                </div>
                <div className='card-bottom'>
                    <div className='card-info'>
                        <h4 >{props.data.Title}</h4>
                        <p>{props.data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard


