import ViewAll from '../ViewAll'
import './style.css'

// eslint-disable-next-line react/prop-types
const Title = ({ titleText ,showViewAll = false }) => {
    return(
        
        <div className={`title-${showViewAll}`} >
            <h2 className="title-h2">{titleText}</h2>
            <div className="title-line"></div>
            {showViewAll && <ViewAll />}
        </div>
    )
}

export default Title
