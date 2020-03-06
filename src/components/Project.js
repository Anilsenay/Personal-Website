import React, {useEffect, useState} from 'react'

export default function Project(props) {

    //const [projectName, setProjectName] = useState(0);
    // const [info, setInfo] = useState("");
    const projectName = props.projectName + "";
    const project_name = [projectName.substring(0, projectName.length-1), projectName[projectName.length-1] ]

    useEffect(() => {
        setInterval(() => {
            (document.querySelector('.i').style.backgroundColor === "rgb(64, 62, 66)") ? (document.querySelector('.i').style = '') : (document.querySelector('.i').style = 'background-color: #403e42');
        }, 500);
    })

    return (
        <div className="project">
            <div className="whoami-text">
                <div>~$ ./{project_name[0]}<span className="i">{project_name[1]}</span></div>  
            </div>
            <p>{props.info}</p>
            <p>Github: <a href={props.link}>{props.link}</a></p>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-color" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: `${props.progress}`}}></div>
            </div>
        </div>
    )
}
