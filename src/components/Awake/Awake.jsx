import { useEffect } from 'react';

const fetchProjectsData = async () => {
    const project1URL = 'https://takenote-euho.onrender.com/';
    const project2URL = 'https://mastermind-webapp.onrender.com/';
    try {
        const response1 = await fetch(project1URL, { mode: 'no-cors' });
        if (response1.ok) {
            console.log('Fetched data from TakeNote');
        } else {
            throw new Error('Failed to fetch data from TakeNote');
        }

        const response2 = await fetch(project2URL, { mode: 'no-cors' });
        if (response2.ok) {
            console.log('Fetched data from Mastermind');
        } else {
            throw new Error('Failed to fetch data from Mastermind');
        }

    } catch (error) {
        console.error(error);
    }
}

export default function Awake() {

    useEffect(() => {
        fetchProjectsData();

        const intervalId = setInterval(() => {
            fetchProjectsData();
        }, 840000);

        return () => clearInterval(intervalId);

    }, []);

    return null;
}