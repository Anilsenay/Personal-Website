import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import "../App.css";
import Project from "../components/Project";

import ProjectsFromJson from "../projects";
import Loading from "../components/Loading";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const projects = ProjectsFromJson();

  useEffect(() => {
    repos.length === 0 &&
      fetch("https://api.github.com/users/anilsenay/repos?per_page=100")
        .then((response) => response.json())
        .then((data) => setRepos(repos.concat(data)));

    repos.length !== 0 &&
      repos.length !== projects.length &&
      setRepos(
        repos.filter((item) => {
          if (projects.some((e) => e.name === item.name)) return item;
        })
      );
  }, [projects, repos]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title />
        <hr />
        <h3>Projelerim</h3>
        <hr />
        {repos.length === projects.length ? (
          repos.map((item) => {
            return (
              <Project
                id={"project" + item.id.toString()}
                key={item.id}
                projectName={item.name}
                info={`> ${item.description}`}
                link={item.html_url}
                progress={
                  projects.find((e) => e.name === item.name).progress + "%"
                }
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
