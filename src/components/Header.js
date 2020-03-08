import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="header-links">/home</Link>
                <Link to="/projects" className="header-links">/projects</Link>
          </div>
        )
    }
}
