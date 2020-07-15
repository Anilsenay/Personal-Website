//fetching json from github, so i can easily update projects with editing this json file in github.

import { useEffect, useState } from 'react'

export default function ProjectsFromJson () {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Anilsenay/Personal-Website/master/src/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data.projects));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return projects;
}