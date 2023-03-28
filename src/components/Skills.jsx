import { useState } from 'react';
import imgFront from '../../public/front.png';
import imgBack from '../../public/back.png';
import imgOther from '../../public/other.png';
import varSkills from "../assets/varSkills.jsx"

export default function Skills() {
    const [showModal, setShowModal] = useState(0);
    const [isClosing, setIsClosing] = useState(false);

    let titleModal = ""
    if (showModal == 1) {
        titleModal = "Front-End"
    } else if (showModal == 2) {
        titleModal = "Back-End"
    } else {
        titleModal = "Other"
    }
    let num = 1

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            setShowModal(0)
        }
    }

    const toggleModal = () => {
        console.log("adsa")
        setIsClosing(true)
        setTimeout(() => {
            setShowModal(0)
            setIsClosing(false)
        }, 400);
    }

    return (
        <section>
            <h2 className='numberHeading numberHeading2'>Skills</h2>
            <div className='skills-content'>
                <div className='skills-content-item' onClick={() => setShowModal(1)}>
                    <img src={imgFront} alt="Imagen skills frontend" />
                    <h4 className='mt'>Front-End</h4>
                </div>
                <div className='skills-content-item' onClick={() => setShowModal(2)}>
                    <img src={imgBack} alt="Imagen skills backend" />
                    <h4 className='mt'>Back-End</h4>
                </div>
                <div className='skills-content-item mt' onClick={() => setShowModal(3)}>
                    <img src={imgOther} alt="Imagen skills other" />
                    <h4 className='mt'>Other</h4>
                </div>
            </div>
            {showModal != 0 &&
                <div className={`modal ${isClosing ? 'modal-closing' : ''}`} onClick={closeModal}>
                    <div className="modal-content">
                        <div className='modal-header'>
                            <h5 className='modal-title'>{titleModal}</h5>
                            <div onClick={toggleModal} className="btn-close">X</div>
                        </div>
                        <div className='modal-content-skill'>
                            {varSkills[showModal].map((skill) => {
                                num++
                                return (
                                    <div key={num} className="modal-content-element-skill">
                                        {skill.icon}
                                        <p>{skill.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}