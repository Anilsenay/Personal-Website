import React, { Component } from 'react'
import Header from './Header'
import Title from './Title'
import '../App.css';
import Project from './Project'

export default class Projects extends Component {
    render() {
        return (
            <div className="App">
              <Header/>
              <div className="container">
                <Title/>
                <hr/>
                <h3>Projelerim</h3>
                <hr/>
                <Project
                  id="project1"
                  projectName="Change My Mind"
                  info="> Android ile uğraştığım bir uygulama. Bir süreliğine ara verdim. Son halini Github'da bulabilirsiniz."
                  link="https://github.com/Anilsenay/Change_My_Mind"
                  progress="25%"
                />
                <hr/>
                <Project
                id="project2"
                projectName="Mushroom Meshwork"
                info=" > Bu aslında bize derste verilen bir proje. Fakat içine sevgimi de kattığım bir iş oldu. Sadece not alıp geçmek için yapılan bir proje olarak görmedim. Daha fazlasıydı. "
                link="https://github.com/Anilsenay/School-Game-Project"
                progress="100%"
                />
                <hr/>
              </div>
            </div>
          )
    }
}
