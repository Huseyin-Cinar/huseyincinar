//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Huseyin Cinar", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'huseyinncinar0@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '555 555 55 55', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+90' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/Huseyin-Cinar', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://linkedin.com/huseyincinar', icon: faLinkedinIn },
        { type: 'medium', link: 'https://medium.com/huseyincinar', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Huseyin.",
        subtitle: "I'm 16 years old Self-taught Front-end Developer and I most improve myself on Cascading Style Sheets. I love it." 
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "frontend", // eg.frontend, backend, devops etc
            skills: ["Html", "Css", "Phyton"] //eg. react, html, python etc.
        },
        {
            category: "backend",
            skills: ["Javascript", "Typescript", "Php"]
        },
        { 
            category: "discord.js",
            skills: ["v14 Bot", "Server Template", "Music Infrastructure"]
        },
        {
            category: "node.js",
            skills: ["CentOS", "My SQL", "Chat App"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Hi, I'm 16 years old Self-taught Front-end Developer and I most improve myself on Cascading Style Sheets. I am working on Hack Club and the Future from Home in Turkiye. I can speaking English, Turkish and a little bit German. I stopped making Discord bots but I still do to special requests. You can find all my links for advertising and collaborations contact page. Currently, I am website creating with HTML, CSS and Javascript. I think that's all, if you like me you can follow me on Github.",
        resume: "https://futuree.netlify.app/en" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'May - Oct 2020', //timespan
                title: 'Student', //eg. BTech in Compuster Engineering
                organization: 'Seventy-fifth year Middle School', //eg. VJTI, Mumbai
                description: 'Secured a diploma score of 100 in all sems appeared in so far.' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'May - Oct 2021',
                title: 'Student',
                organization: 'Farabi Anatolian High School',
                description: 'Secured a diploma score of 97.9 in all sems appeared in so far.'
            },
            {
                time: 'May - Oct 2022',
                title: 'Student',
                organization: 'Farabi Anatolian High School',
                description: 'Secured a diploma score of 99.1 in all sems appeared in so far.'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Hack Club', //company name eg.Microsoft
                companylogo: 'https://avatars.githubusercontent.com/u/5633654?v=4', //companylogo
                position: 'Contributor', //post you held eg.Senior SDE
                time: 'February 2023 - ...', //timespan
                description: 'A worldwide community of high school hackers. By the students, for the students.' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'the Future',
                companylogo: 'https://futuree.netlify.app/resimler/futurebanner.png',
                position: 'Company Owner',
                time: 'March 2020 - ...',
                description: 'The Future comes from many parts of the world; was established to gather people with different purposes such as software, coding, programming, domain buying, opening a website, on a single website.'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}
