import React, { Component } from 'react'

export default class GlowingButton extends Component {

    state = {
        isGlow:false
    };

    toggleBox = () => {
        this.setState(prevState => ({ isGlow: !prevState.isGlow }));
    };

    render() {
        const { isGlow } = this.state;
        return (
            <div className={`buttons-display ${isGlow ? "test": ""}`}
                onMouseEnter={() => {this.toggleBox()}}
                onMouseLeave={() => {this.toggleBox()}}>
                <a href="https://twitter.com/anilsenay" className="buttons">
                    <div className="box" ><i className={`fab fa-${this.props.social} icon-margin`} aria-hidden="true"/>
                        <span>{this.props.text}</span>
                    </div>
                </a>
            </div> 
        )
    }
}
