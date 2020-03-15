import React, { Component } from 'react'
import {movieFetchs,movieFetch} from '../../Actions'
import {connect} from 'react-redux'
import MoviesList from './MoviesList'

class Movies extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.movieFetchs();
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            Movies
                        </div>
                        <div className="col-md-6">
                            <button
                                className="btn btn-success float-right"
                                >
                                    New
                            </button>
                        </div>
                    </div>
                    {
                        this.props.movies && Array.isArray(this.props.movies) && (
                            <MoviesList
                                movies={this.props.movies}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps({movies}){
    return {movies}
}
export default connect(mapStateToProps,{movieFetch,movieFetchs})(Movies)
