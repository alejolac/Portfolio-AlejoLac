import "../style/burgerMenu.css"
import imgLogo from "../../public/Logo_Alejo.png"

const BurgerMenu = () => {
    return (
        <section className="top-nav">
            <div className="imgMenu">
                <a href="#">
                    <img src={imgLogo} alt="" />
                </a>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href="#aboutMeMain"><span className="navNumbers">01.</span> About</a></li>
                <li><a href="#Projects"><span className="navNumbers">02.</span> Work</a></li>
                <li><a href="#"><span className="navNumbers">03.</span> Skills</a></li>
                <li><a href="#"><span className="navNumbers">04.</span> Contact</a></li>
                <li><a href="#"><span className="navResume">Resume</span></a></li>
            </ul>

        </section>
    )
}

export default BurgerMenu