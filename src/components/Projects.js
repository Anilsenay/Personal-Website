import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import '../App.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="App">
              <Header/>
              <div className="container">
                <Title/>
                <hr/>
              </div>
            </div>
          )
    }
}
