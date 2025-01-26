import { useEffect } from 'react';

const fetchProjectsData = () => {
    // const project1URL = 'https://takenote-euho.onrender.com/';
    // const project1URL = 'https://takenote-qjkn.onrender.com/';
    const project1URL = 'https://takenote.tech/';
    // const project2URL = 'https://mastermind-webapp.onrender.com/';
    // const project2URL = 'https://mastermind-webapp-kst2.onrender.com/';
    const project2URL = 'https://mastermind.mostafawahied.com/';

    fetch(project1URL)
        .then((response) => {
            if (response.ok) {
                console.log('Fetched data from TakeNote');
            } else {
                console.error('Failed to fetch data from TakeNote');
            }
        })
        .catch((error) => {
            console.error('Error fetching data from TakeNote:', error);
        });

    fetch(project2URL)
        .then((response) => {
            if (response.ok) {
                console.log('Fetched data from Mastermind');
            } else {
                console.error('Failed to fetch data from Mastermind');
            }
        })
        .catch((error) => {
            console.error('Error fetching data from Mastermind:', error);
        });
};

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