import React, { Component } from 'react'
import imageasset from '../image-asset.gif'

export default class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={imageasset} alt="logo" height="200px" />
                    <p>
                        Get Started
        </p>
                    <a
                        className="App-link"
                        href="./Login.js"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>


                </header>
            </div>
        )
    }
}
