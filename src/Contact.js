import React, { Component } from 'react'
import GlowingButton from './GlowingButton'

export default class Contact extends Component {

    state = {
        isGlow:false
    };

    toggleBox = () => {
        this.setState(prevState => ({ isGlow: !prevState.isGlow }));
    };

    render() {
        const { isGlow } = this.state;
        return (
            <div className="contact">
                <div className="contact-text">Email: anilsenay3@gmail.com</div>
                <div className="contact-text">GPG: 0x91A3D10D</div>
                <div className="contact-text contact-text-bigger">Sosyal Medya</div>
                
                <div>
                    <GlowingButton text="@anilsenay" social="twitter"></GlowingButton>
                    <GlowingButton text="@anilsenay" social="instagram"></GlowingButton>
                    <GlowingButton text="@anilsenay" social="github"></GlowingButton>
                    <GlowingButton text="/anılşenay" social="linkedin"></GlowingButton>
                </div>
            </div>
        )
    }
}
