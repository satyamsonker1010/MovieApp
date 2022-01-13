import React ,{useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi';
import APIKey from '../../common/apis/MovieApiKey'
import axios from 'axios';
const Home = () => {
    const movieText = "harry";
    useEffect(()=>{
        const fetchMovies = async ()=>{
            const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log("Err :", err);
            });
            console.log("The response from api ", response);
        }

        fetchMovies();
    },[])
 
    return (
        <div>
        <div className='banner-img'></div>
        <MovieListing />
        </div>
        )
}

export default Home
