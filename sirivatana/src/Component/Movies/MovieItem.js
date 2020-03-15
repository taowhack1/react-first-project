import React, { Component } from 'react'

class MovieItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {Title,
            Release_Date,Director,
            IMDB_Rating} = this.props.movie;
        return (
            <div className="col-md-4 col-sm-6">
                <h5>{Title}</h5>
                <p className="text-right">Director : {Director}</p>
                <p className="text-right">Release : {Release_Date}</p>
                <p className="text-right">Rating : {IMDB_Rating}</p>
                <hr/>
            </div>
        )
    }
}
export default MovieItem