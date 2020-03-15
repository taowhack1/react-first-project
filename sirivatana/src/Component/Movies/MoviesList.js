import React, { Component } from 'react'
import MovieItem from './MovieItem'

class MoviesList extends Component {
    showMovies(){
        this.props.movies && 
        this.props.map(movie => (
            <MovieItem
             key={movie.id}
             movie={movie}
            />
        ))
    }
    render() {
        return <div className="row">{this.showMovies}</div>
    }
}
export default MoviesList
