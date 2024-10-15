import imgAle from "../../public/imgAlejo.jpeg"

export default function AboutMeMain() {
    return (
        <>
            <div className='abmtt'>
                <div className='aboutMeMain-title'>
                    <h2 className='aboutMeMain-titleSpan'><span className='aboutMeMain-title'>01. </span> About Me</h2>
                </div>
                <div className='aboutMeMain-title-hr'>
                    <hr />
                </div>
            </div>
            <div className='aboutMeMain-content'>
                <div className='aboutMeMain-text'>
                    <p>
                        Hi! My name is Alejo, and I am 20 years old. I developed my passion for programming when I became interested in game development and realized that my favorite part was programming. Currently, I am studying at the Faculty of Engineering and began my training at the <a href="https://esi.edu.uy" target="_blank" rel="noopener noreferrer">ESI</a> in 2019, where I learned Java, C#, SQL, among other subjects.
                    </p>
                    <p>
                        I am currently working at <a href="https://www.anep.edu.uy/" target="_blank" rel="noopener noreferrer">ANEP</a> as an IT intern, where I have gained experience in operating systems and networks. I have also completed my studies at UTU and have knowledge of Node.js, MongoDB, and React. I am excited to continue growing in the field of development and am looking for new opportunities.
                    </p>
                </div>
                <div className='aboutMeMain-img'>
                    <img src={imgAle} alt="" />
                </div>
            </div>
        </>
    )
}