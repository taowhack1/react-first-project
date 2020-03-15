import {MOVIE_FETCHS,MOVIE_FETCH} from '../Actions/type'
export default function (state = [] , action){
    switch(action.type){
        case "movie_fetchs":
        case MOVIE_FETCH:
            return action.payload;
        default:
            return state;
    }
}