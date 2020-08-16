import React, {useEffect} from 'react'

export default function Project(props) {

    const projectName = props.projectName + "";
    const project_name = [projectName.substring(0, projectName.length-1), projectName[projectName.length-1] ]
    let intervalID = props.id

    useEffect(() => {
        intervalID = setInterval(() => {
            (document.querySelector(`#${props.id}`).style.backgroundColor === "rgb(64, 62, 66)") ? (document.querySelector(`#${props.id}`).style = '') : (document.querySelector(`#${props.id}`).style = 'background-color: #403e42');
        }, 500);

        return () => clearInterval(intervalID)
    }, [])

    return (
        <div className="project">
            <div className="whoami-text">
                <div>~$ ./{project_name[0]}<span id={(props.id)} className="i">{project_name[1]}</span></div>  
            </div>
            <p>{props.info}</p>
            <p>Github: <a href={props.link}>{props.link}</a></p>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-color" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: `${props.progress}`}}></div>
            </div>
            <hr/>
        </div>
    )
}
