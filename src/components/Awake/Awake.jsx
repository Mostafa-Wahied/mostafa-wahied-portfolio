import { useEffect } from 'react';

const fetchProjectsData = () => {
    const project1URL = 'https://takenote-euho.onrender.com/';
    const project2URL = 'https://mastermind-webapp.onrender.com/';

    fetch(project1URL, { mode: 'no-cors' })
        .then((response) => {
            if (response.type === 'opaque') {
                console.log('Fetched data from TakeNote');
            }
        });

    fetch(project2URL, { mode: 'no-cors' })
        .then((response) => {
            if (response.type === 'opaque') {
                console.log('Fetched data from Mastermind');
            }
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