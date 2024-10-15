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
                        Hi! my name is Alejo i'm 19 years old and I developed my passion for programming when I got interested in game development and realized that my favorite part was programming. I took my first steps at the <a target="_blank" href="https://esi.edu.uy">"Escuela Superior de informatica"</a> in 2019, where I would learn Java, C#, SQL among others
                    </p>
                    <p>
                        I'm currently studying at <a target="_blank" href="https://jovenesaprogramar.edu.uy">Jovenes a programar</a> a course of <a target="_blank" href="https://ceibal.edu.uy">Ceibal</a> where did i learn all the knowledge of a front end and deepen soft skills, and they are helping me get my first job as a developer.
                    </p>
                </div>
                <div className='aboutMeMain-img'>
                    <img src={imgAle} alt="" />
                </div>
            </div>
        </>
    )
}