import "../style/ownProjectsView.css"

export default function OwnProjectsView({link, description, img, linkGitHub, technologies, name}) {
    console.log(link)
    return (
        <div className="project-container">
        <div className="project">
            

            <div className="project-img">
                <a target="_blank" href={link}>
                    <img src={img} alt={name} />
                </a>
            </div>

            <div className="project-content">
                <div className="project-label">Practical project</div>
                <h4 className="project-title">{name}</h4>
                <div className="project-details">
                    <p>{description}</p>
                    <ul>
                        {
                            technologies.map((technology) => {
                                return (
                                    <li>{technology}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="linksProject">
                <a target="_blank" href={linkGitHub}>
                    <i className="fa-brands fa-github"></i>
                </a>
                <a target="_blank" href={link}>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

    </div>
    )
}