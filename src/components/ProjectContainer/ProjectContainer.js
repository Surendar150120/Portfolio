import React from 'react'
import "./ProjectContainer.css";
import { Element } from 'react-scroll';
import Project from '../Project/Project';

const ProjectContainer = () => {

    const projects = [
        {
            image: "https://d33wubrfki0l68.cloudfront.net/672566e8ef0e06d1693d699c/screenshot_2024-11-01-23-41-34-0000.webp",
            title: "MUSTUBE App",
            link: "https://mustapp.netlify.app",
            description: "This interactive project is only focused on UI and responsive for every users to use this app.Its a content video app. In this app anyone can watch any videos and this project is build using rest api.",
            code: "https://github.com/Surendar150120/MusTube-app"
        },
        {
            image: "https://d33wubrfki0l68.cloudfront.net/6656df547e59026d06160aa6/screenshot_2024-05-29-07-55-03-0000.webp",
            title: "TODO list",
            link: "https://jovial-ganache-a9130d.netlify.app/",
            description: "In This responsive TODO list app users can add and delete the task in their list.",
            code: "https://github.com/Surendar150120/TODO-LIST-APP/tree/main/Todo-list%20app/todo" 
        },
        {
            image: "https://d33wubrfki0l68.cloudfront.net/65f1d643e26f9a43334e8498/screenshot_2024-03-13-16-37-24-0000.webp",
            title: "Burger House",
            link: "https://genuine-druid-2d0536.netlify.app/",
            description: "This project is only focused on UI and responsive for every users to use this app and in this app users can check the food and order also and Its a restaurant booking app to book the table ",
            code: "https://github.com/Surendar150120/Food-App/tree/main/Burger%20App/Burger_House_06-03-24-main"
        },
        {
            image: "https://d33wubrfki0l68.cloudfront.net/65f2136fa7ffb32dd7c2ef69/screenshot_2024-03-13-20-58-31-0000.webp",
            title: "Currency App",
            link: "https://jade-unicorn-2fb704.netlify.app/",
            description: "In this Interactive currency app users can check the currency price of any countries",
            code: "https://github.com/Surendar150120/currency-converter/tree/main/currency%20converter" 
        },
        {
            image: "https://d33wubrfki0l68.cloudfront.net/6656de3c4453d96c4c48fc88/screenshot_2024-05-29-07-50-20-0000.webp",
            title: "Weather App",
            link: "https://clinquant-sunflower-a6092e.netlify.app/",
            description: "This responsive weather app shows the updated weather datas of any countries, cities around the world",
            code: "https://github.com/Surendar150120/weather-calculate/tree/main/javascript%20wether%20app" 
        },
    ]
  return (
    <Element className='projectContainer' id='projects'>
        <h1 className='project_heading'>Projects</h1>
        <div className='projectContainer_projects'>
          {
            projects.map((project, index) => {
                return (
                    <Project
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    code={project.code}
                    />
                )
            })
          }
        </div>
    </Element>
  )
}

export default ProjectContainer