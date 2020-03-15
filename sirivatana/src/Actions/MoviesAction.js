import axios from 'axios'
import {MOVIE_FETCHS,MOVIE_FETCH} from './type'

export const movieFetchs = () => {
    return dispatch =>{
        axios.get("http://localhost:3001/movies").then(res=>{
            dispatch({ type : "movie_fetchs" , payload : res.data})
            
        })
    }
}
export const movieFetch = (id) =>{
     return dispatch=>{
         axios.get("http://localhost:3001/movies/"+id).then(res=>{
             dispatch({ type : MOVIE_FETCH , payload : res.data})
         })
     }
}