import React, { Component } from 'react'
class Footer extends Component {
    render() {
        const style = {
            backgroundColor:'green',
            padding:'20px',
            marginBottom:'10px'
        }
        return (
            <div className="container-fuid container">
                <div className ="" style={style}>
                <h2>This is Footer.</h2>
                <p>Develop by tulagarn@sirivatana.co.th</p>
                </div>
            </div>
        )
    }
}
export default Footer