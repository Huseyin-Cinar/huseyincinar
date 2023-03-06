// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.jpg';
import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';
import WEBAPPS from '../styles/projects/webapps.png';
import SPEED from '../styles/projects/speedtest.png';
import DISCORD from '../styles/projects/discord-banner-blue.png';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Web Apps', //project name
        description: 'This repository includes apps where applications programmed on the internet by our software team are compiled. Made with ❤️ Open Source.', //project description
        githubLink: 'https://github.com/Huseyin-Cinar/web-apps', //github repo link
        projectLink: 'https://futuree.netlify.app/en/coding', //deployed project link
        tech: ['Html', 'Css', 'Javascript'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [WEBAPPS, WEBAPPS, WEBAPPS], //list of names of images from above imports.
    },
    {
        name: 'Speed Test',
        description: "Only using html, css and js making a easy speedtest website. Writed & edited by Huseyin Cinar based from Sibersozluk. It's completely ready to use, I recommend pulling it from glitch or downloading it as a zip.",
        githubLink: 'https://github.com/Huseyin-Cinar/speedtest-website',
        projectLink: 'https://futuree.netlify.app/apps/speedtest',
        tech: ['Html', 'Css', 'Javascript'],
        photo: [SPEED, SPEED, SPEED],
    },
    {
        name: 'Discord Bot',
        description: 'Hello Friends, This Infrastructure was Made in 2018, and the Necessary Corrections were Made on October 5, 2022. This Infrastructure Now Supports Discord.js v14 Version! You can use it easily!',
        githubLink: 'https://github.com/Huseyin-Cinar/discord-altyapi-bot',
        projectLink: 'https://futuree.netlify.app/dc',
        tech: ['Javascript', 'Typescript', 'Batch'],
        photo: [DISCORD, DISCORD, DISCORD],
    },
]
