import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        const style = {
            backgroundColor:'yellow',
            padding:'20px',
            marginBottom:'10px'
        }
        return (
            <div className="container-fuid container">
                <div className ="" style={style}>
                <h2>This is Header container.</h2>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/">Home</Link></li>
                        <li className="list-inline-item"><Link to="/About">About</Link></li>
                        <li className="list-inline-item"><Link to="/Product">Product</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
