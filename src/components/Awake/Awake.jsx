import { useEffect } from 'react';

const fetchProjectsData = () => {
    // const project1URL = 'https://takenote-euho.onrender.com/';
    // const project1URL = 'https://takenote-qjkn.onrender.com/';
    const project1URL = 'https://takenote.tech/';
    // const project2URL = 'https://mastermind-webapp.onrender.com/';
    // const project2URL = 'https://mastermind-webapp-kst2.onrender.com/';
    const project2URL = 'https://mastermind.mostafawahied.com/';

    const fetchProjectsData = () => {
        const project1URL = 'https://takenote.tech/';
        const project2URL = 'https://mastermind.mostafawahied.com/';
    
        const fetchProject = (projectURL) => {
            fetch(projectURL, {
                method: 'GET',
                credentials: 'include', // Ensures cookies or authentication headers are sent
                headers: {
                    'Content-Type': 'application/json', // Set headers for compatibility
                },
            })
                .then((response) => {
                    // console.log(`Response from ${projectURL}:`, response);
                    if (response.ok) {
                        console.log(`Fetched data from ${projectURL}`);
                    } else {
                        console.error(
                            `Failed to fetch data from ${projectURL}: ${response.status} ${response.statusText}`
                        );
                    }
                    return response.text(); // Fetch the raw response body for debugging
                })
                .catch((error) => {
                    console.error(`Error fetching data from ${projectURL}:`, error);
                });
        };
    
        // Fetch data for both projects
        fetchProject(project1URL);
        fetchProject(project2URL);
    };
    
    fetchProjectsData();
}

export default function Awake() {
    useEffect(() => {
        fetchProjectsData(); // Fetch data immediately when the component mounts

        const intervalId = setInterval(() => {
            fetchProjectsData();
        }, 840000); // 14 minutes

        return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
    }, []);

    return null;
}