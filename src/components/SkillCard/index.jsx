/* eslint-disable react/prop-types */
import './style.css'

const SkillCard = ( { titleText , skills} ) => {
    return(
        <div className='skill-card'>            
            <div className='skill-card__header'>
                <h3>{titleText}</h3>
            </div>
            <div className='skill-card__skill-container'>
                {skills.map((skill, index) => (
                    <span key={index} className='skill-container__skills'>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default SkillCard;