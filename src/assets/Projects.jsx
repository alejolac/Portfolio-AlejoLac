import Ecommerce from "../../public/Project1.png"
import Space from "../../public/Project2.png"
import Portfolio from "../../public/Project3.png"

const Projects = [
    {

        link: "https://alejolac.github.io/ecomerce_JAP/",
        linkGitHub: "https://github.com/alejolac/ecomerce_JAP",
        name: "E-Commerce",
        description: `this was a final project of the course the "Jovenes a programar" by Ceibal, it was about a simulation of store online where could they be published different products, i worked with json files, Javascript and a bit of nodeJs`,
        technologies: ["JSON", "JS", "NodeJS", "Bootstrap"],
        img: Ecommerce
    },

    {
        link: "https://alejolac.github.io/FetchApiSpace/",
        linkGitHub: "https://github.com/alejolac/FetchApiSpace",
        name: "Space",
        description: `This is another project of "Jovenes a programar" where with some colleagues we had to fetch data to a NASA api to show data based on a search`,
        technologies: ["JSON", "JS", "FETCH async/await", "Bootstrap"],
        img: Space
    },

    {
        link: "https://alejolac.github.io/Portfolio-AlejoLac/",
        linkGitHub: "https://github.com/alejolac/Portfolio-AlejoLac",
        name: "Portfolio",
        description: "This is the portfolio where all my information is as skills, contact and about me",
        technologies: ["React", "JSX", "CSS", "JSON", "Vite"],
        img: Portfolio
    }
]

export default Projects