import { takenote, mastermind, apiExplorer} from "..//assets"

export const projects = [
    {
        name: "TakeNote",
        description: "A web app that allows teachers to easily store and analyze formative student data all in one convenient place.",
        image: takenote,
        technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "JavaScript"],
        github: "https://github.com/Mostafa-Wahied/takenote-web-app",
        live: "",
        codesandbox: ""
    },
    {
        name: "Mastermind",
        description: "The Mastermind game web app is a fun and engaging implementation of the classic game of Mastermind.",
        image: mastermind,
        technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "JavaScript"],
        github: "https://github.com/Mostafa-Wahied/mastermind-webapp",
        live: "https://mastermind-webapp-production.up.railway.app/",
        codesandbox: ""
    },
    {
        name: "API Explorer",
        description: "A simple application that allows you to explore different APIs and visualize their data in various ways.",
        image: apiExplorer,
technologies: ["React", "Axios", "Material UI", "Chart.js", "JavaScript"],
        github: "",
        live: "",
        codesandbox:"https://codesandbox.io/s/mw-cw-assessment-forked-wgejlw"
    },
]