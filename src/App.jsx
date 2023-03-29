import { useState, useEffect } from 'react'
import './App.css'
import Projects from "./components/ownProjectsView.jsx"
import AboutMeStart from "./components/AboutMe.jsx"
import HamburgerMenu from "./components/BurgerMenu.jsx"
import AboutMeMain from "./components/AboutMeMain.jsx"
import ProjectCard from "./assets/Projects.jsx"
import Skills from "./components/Skills.jsx"

function App() {
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(true)
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const handleMove = (e) => {

      const { pageX, pageY } = e;
      setPosition({ x: pageX, y: pageY })
    }

    if (enabled) {
      addEventListener("mousemove", handleMove)
    }

    return () => {
      removeEventListener("mousemove", handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  // UseEffect para la transición de loader a contenido
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  // UseEffect para el loader
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={`${!show ? 'hidden' : ''}`}>
          <span className='loader'></span>
        </div>
      ) : (
        <div className='visible'>
          <div className="cursor"
            style={{
              zIndex: 1000,
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid #fff',
              borderRadius: '50%',
              opacity: 0.8,
              pointerEvents: 'none',
              left: -25,
              top: -25,
              width: 50,
              height: 50,
              transform: `translate(${position.x}px, ${position.y}px)`,
              display: enabled ? 'block' : 'none',
              transition: "all ease 0.1s"
            }}
          />
          <nav className='navBar'>
            <HamburgerMenu />
          </nav>
          <div className='barraInfoL'>
            <div className='barraInfo-content'>
              <a target="_blank" href="https://www.linkedin.com/in/alejo-lacroix-906433252/">
                <i className="fa-brands fa-linkedin barraInfo-logos"></i>
              </a>
              <a target="_blank" href="https://github.com/alejolac">
                <i className="fa-brands fa-github barraInfo-logos"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/alejobuc_/">
                <i className="fa-brands fa-instagram barraInfo-logos"></i>
              </a>
              <a target="_blank" href="https://codepen.io/alejobuc">
                <i className="fa-brands fa-codepen barraInfo-logos"></i>
              </a>
            </div>
          </div>
          <div className='barraInfoR'>
            <div className='barraInfo-content'>
              <p className='barraInfo-content-email'>alejolac2003@gmail.com</p>
              <div onClick={() => {
                setEnabled(!enabled)
              }} className={enabled ? ("button-follow buttonFollowMouseEnable") : ("button-follow buttonFollowMouse")}>
                <i className="fa-solid fa-arrow-pointer"></i>
              </div>
            </div>
          </div>
          <main>
            <div id='aboutMeStart' className='aboutMe'>
              <AboutMeStart />
            </div>
            <div id="aboutMeMain">
              <AboutMeMain />
            </div>
            <div id='Projects' className='ProjectsMain'>
              <h2 className='numberHeading'>Projects</h2>
              <div className='projectsMain-content'>
                {
                  ProjectCard.map((project) => {
                    return (
                      <Projects
                        key={project.name}
                        link={project.link}
                        description={project.description}
                        img={project.img}
                        linkGitHub={project.linkGitHub}
                        technologies={project.technologies}
                        name={project.name}
                      />
                    )
                  }
                  )
                }
              </div>
              <section id='Skill' className='skills'>
                <Skills />
              </section>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}

export default App