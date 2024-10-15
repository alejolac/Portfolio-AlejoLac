import Ecommerce from "../../public/Project1.png"
import Space from "../../public/Project2.png"
import Portfolio from "../../public/Project3.png"
import Trivia from "../../public/Project4.png"
import Notes from "../../public/Project5.png"

const Projects = [
    {

        link: "https://alejolac.github.io/ecomerce_JAP/",
        linkGitHub: "https://github.com/alejolac/ecomerce_JAP",
        name: "E-Commerce",
        description: `this was a final project of the course the "Jovenes a programar" by Ceibal, it was about a simulation of store online where could they be published different products, i worked with json files, Javascript and a bit of nodeJs.`,
        technologies: ["JSON", "JS", "NodeJS", "Bootstrap"],
        img: Ecommerce,
        state: true
    },

    {
        link: "https://alejolac.github.io/FetchApiSpace/",
        linkGitHub: "https://github.com/alejolac/FetchApiSpace",
        name: "Space",
        description: `This is another project of "Jovenes a programar" where with some colleagues we had to fetch data to a NASA api to show data based on a search.`,
        technologies: ["JSON", "JS", "FETCH async/await", "Bootstrap"],
        img: Space,
        state: false
    },

    {
        link: "https://alejolac.github.io/Portfolio-AlejoLac/",
        linkGitHub: "https://github.com/alejolac/Portfolio-AlejoLac",
        name: "Portfolio",
        description: "This is the portfolio where all my information is as skills, contact and about me.",
        technologies: ["React", "JSX", "CSS", "JSON", "Vite"],
        img: Portfolio,
        state: false
    },

    {
        link: "https://alejolac.github.io/Trivia-react/",
        linkGitHub: "https://github.com/alejolac/Trivia-react/tree/master",
        name: "Trivia",
        description: "This is a basic project of a trivia developed mostly with the AI of chat-gpt I did this to demonstrate my capabilities with the tool, it has 4 categories (movies, videogames, art and science) and 10 questions each.",
        technologies: ["ChatGPT", "React", "CSS", "JSON", "Vite"],
        img: Trivia,
        state: true
    },

    {
        link: "https://app-notes-nu.vercel.app",
        linkGitHub: "https://github.com/alejolac/Notes-Front-End",
        name: "Notes",
        description: "This is a project of a notes app, where you can create, edit and delete notes of all with a database of MongoDB and Mongoose, May take a while to load.",
        technologies: ["React", "Express", "Backend", "MongoDB", "Mongoose"],
        img: Notes,
        state: true
    }
]

export default Projects