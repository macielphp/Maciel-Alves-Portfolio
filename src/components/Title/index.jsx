import React from 'react';
import ViewAll from '../ViewAll'
import './style.css'

// eslint-disable-next-line react/prop-types
const Title = ({ titleType='h2', titleText ,showViewAll = false }) => {
    return(
        
        <div className={`title-${showViewAll}`} >
            <div className='title-container'>
                {React.createElement(titleType, {className: 'title-h2'}, titleText)}
                <div className="title-line"></div>
            </div>
            {showViewAll && <ViewAll />}
        </div>
    )
}

export default Title
