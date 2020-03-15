import React, { Component } from 'react'
import Layout from './Layout'
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <Layout>
                <div className="container-fluid display-block">
                    <p>this is home component</p>

                </div>
            </Layout>
        )
    }
}
export default Home;
