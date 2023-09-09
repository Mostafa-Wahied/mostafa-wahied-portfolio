import { takenote, mastermind, sunbreak, fieldcopier, takenoteVideo, takenoteScreenshot1, takenoteScreenshot2, takenoteScreenshot3, takenoteSketch1, takenoteSketch2, takenoteSketch4, sunbreakVideo, mastermindVideo, mastermindScreenshot1, mastermindScreenshot2, mastermindScreenshot3 } from '../assets/index.js';
import { projects } from '../constants/index.js';

export const projectPages = [
    {
        name: "TakeNote",
        description: "TakeNote is a web application that allows teachers to take observational notes on students' reading and writing progress. Teachers can easily retrieve data and view an overview of students by reading or writing groups. TakeNote is a tool that helps teachers to conduct ongoing formative assessment and to make informed decisions about students' learning needs.",
        challenge: "Traditional methods of tracking student data in schools and education are inefficient and underutilize the wealth of information available. Taking notes during meetings with individual students can be time-consuming, and it is difficult for teachers to easily analyze formative assessment data across classes.",
        solution: "TakeNote was designed by teachers to tackle these challenges. The user-friendly web application streamlines the process of taking and tracking student notes, making it easier for teachers to monitor student progress and identify areas for growth. With features such as the dashboard, teachers can easily access and analyze student data, allowing them to make informed decisions about their teaching strategies.",
        impact: "By offering a comprehensive and user-friendly solution for managing student data, TakeNote has a significant impact on the efficiency and effectiveness of formative assessment in the classroom. Teachers can easily access and analyze student data, allowing them to identify trends and areas where students may need additional support. This enables educators to make data-driven decisions and tailor their teaching strategies to address individual student needs, ultimately leading to improved student outcomes and a more personalized learning experience.",
        mainImage: '',
        gifImage: '',
        video: takenoteVideo,
        sketchImages: [takenoteSketch1, takenoteSketch2, takenoteSketch4],
        screenshots: [takenoteScreenshot1, takenoteScreenshot2, takenoteScreenshot3],
        technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "JavaScript"],
        // github: "https://github.com/Mostafa-Wahied/takenote-web-app",
        github: projects[0].github,
        // live: "https://takenote-euho.onrender.com/",
        live: projects[0].live,
        codesandbox: ""
    },
    {
        name: "FieldCopier",
        description: "Field Copier is a Firefox extension designed to streamline the process of copying and mapping fields between two platforms. Developed using JavaScript and Bootstrap, this extension automates the process of transferring data between multiple systems, increasing productivity and efficiency.",
        challenge: "While working at Xerox, the order desk team's order fulfillment process involved gathering data from multiple systems to complete each request. Manually collecting information across disparate sources was time-consuming, causing delays that impacted productivity. The challenge was streamlining this process for efficiency gains within existing workflows and systems.",
        solution: "Seeing an opportunity to automate this process, I developed a Firefox extension that allows users to copy mapped fields from one system to another. Developed using JavaScript and Bootstrap, this extension automates the process of transferring data between multiple systems, increasing productivity and efficiency. After piloting and training the team on the extension, the team's efficiency improved and successfully increased the fulfillment rate for requests.",
        mainImage: fieldcopier,
        gifImage: '',
        sketchImages: [],
        screenshots: [],
        technologies: ["JavaScript", "Bootstrap", "HTML", "CSS"],
        // github: "https://github.com/Mostafa-Wahied/copy-fields-extension",
        github: projects[1].github,
        live: "",
        codesandbox: ""
    },
    {
        name: "Sunbreak",
        description: "This project is a web application that allows users to search for outdoor activities, see them on a map, and get real-time weather information for the locations of these activities. Sunbreak provides up-to-date information about outdoor activities and weather conditions to help users plan their adventures.",
        challenge: "When planning outdoor activities, it can be difficult to find information about the weather conditions at the location of the activity. While there are many websites that provide weather forecasts, they do not provide information about outdoor activities in the area. The challenge was to create a web application that integrates weather information with outdoor activities to help users plan their adventures.",
        solution: "Sunbreak is a web application that allows users to search for outdoor activities, see them on a map, and get real-time weather information for the locations of these activities. By integrating the Google Maps API, OpenWeather API, and recreation.gov API, the application provides up-to-date information about outdoor activities and weather conditions to help users plan their adventures. The application is built with React and Vite, and it is designed to be responsive and mobile-friendly.",
        // mainImage: sunbreak,
        gifImage: '',
        video: sunbreakVideo,
        sketchImages: [],
        screenshots: [],
        technologies: ["React", "Vite", "Axios", "Material UI", "JavaScript"],
        // github: "https://github.com/Mostafa-Wahied/Sunbreak",
        github: projects[2].github,
        // live: "https://sunbreak.netlify.app/",
        live: projects[2].live,
        codesandbox: ""
    },
    {
        name: "Mastermind",
        description: "Mastermind is a responsive, mobile-friendly implementation of the classic game with multiple modes and difficulty levels. It includes two game modes - Numbers and Colors, easy/medium/hard difficulty levels that configure combination length and guessing time, score tracking, hints and animations, and an adjustable timer based on difficulty.",
        challenge: "This project was part of a coding challenge presented during a job interview. The challenge was to build a web application version of the classic two-player game Mastermind that could be played against the computer. It required implementing the full gameplay logic, difficulty levels, scoring, and other features to create a complete and playable solo Mastermind game online. The goal was to demonstrate programming abilities by building a responsive web app implementation of this classic game within the given time constraints.",
        solution: "While the game of Mastermind is traditionally played with two players, this web application allows users to play against the computer. The user can choose the difficulty level, and the game is designed to be responsive and mobile-friendly. The application is built with Java, Spring Boot, Thymeleaf, and MySQL, and it is deployed on Render.",
        mainImage: mastermind,
        gifImage: '',
        video: mastermindVideo,
        sketchImages: [],
        screenshots: [mastermindScreenshot1, mastermindScreenshot2, mastermindScreenshot3],
        technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "JavaScript"],
        // github: "https://github.com/Mostafa-Wahied/mastermind-webapp",
        github: projects[3].github,
        // live: "https://mastermind-webapp.onrender.com/",
        live: projects[3].live,
        codesandbox: ""
    },

]
